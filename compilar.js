const fs = require('fs');
const path = require('path');

// Helper to parse CLI arguments
const args = process.argv.slice(2);
const capArg = args.find(arg => arg.startsWith('--cap='));
const targetCap = capArg ? parseInt(capArg.split('=')[1], 10) : null;
const allArg = args.includes('--all') || targetCap === null;

const rootDir = __dirname;
const capitulosDir = path.join(rootDir, 'capitulos');

function getChapterTitle(capNum) {
    if (capNum === 0) {
        return 'Prólogo';
    }
    const escaletaPath = path.join(capitulosDir, `capitulo_${capNum}`, 'escaleta.md');
    if (fs.existsSync(escaletaPath)) {
        try {
            const content = fs.readFileSync(escaletaPath, 'utf8');
            const firstLine = content.split('\n')[0].trim();
            const match = firstLine.match(/#\s*(?:Escaleta de Escenas:\s*)?(Capítulo\s+\d+\s*[:-]\s*.+)/i);
            if (match) {
                return match[1].trim();
            }
        } catch (e) {
            // Silence error, fallback to default
        }
    }
    return `Capítulo ${capNum}`;
}

function cleanProse(text) {
    // Remove typical assistant markers, metadata, or IA notes if they accidentally crept in
    let lines = text.split('\n');
    lines = lines.filter(line => {
        const trimmed = line.trim();
        // Ignore lines with IA-only notes, metadata summaries, etc.
        if (trimmed.startsWith('**Última Escena Registrada:**')) return false;
        if (trimmed.startsWith('Nota de escena:')) return false;
        return true;
    });
    
    // Join and trim excessive double spacing at the beginning and end
    let joined = lines.join('\n').trim();
    if (joined.startsWith('#')) {
        joined = joined.replace(/^#\s+.*(?:\r?\n|$)/, '').trim();
    }
    return joined;
}

function compileChapter(capNum) {
    const capFolder = path.join(capitulosDir, `capitulo_${capNum}`);
    if (!fs.existsSync(capFolder)) {
        console.error(`\x1b[31mError: La carpeta del capítulo ${capNum} no existe.\x1b[0m`);
        return null;
    }

    // Read all files in the folder
    const files = fs.readdirSync(capFolder);
    // Filter escena_*_final.md files or prologo_final.md
    const sceneFiles = files
        .filter(file => {
            if (capNum === 0) {
                return file === 'prologo_final.md';
            }
            return /^escena_\d+_final\.md$/.test(file);
        })
        .map(file => {
            const num = file === 'prologo_final.md' ? 0 : parseInt(file.match(/\d+/)[0], 10);
            return { name: file, num, path: path.join(capFolder, file) };
        })
        .sort((a, b) => a.num - b.num);

    if (sceneFiles.length === 0) {
        console.warn(`\x1b[33mAdvertencia: No se encontraron escenas finales (escena_*_final.md o prologo_final.md) para el Capítulo ${capNum}.\x1b[0m`);
        return null;
    }

    const title = getChapterTitle(capNum);
    console.log(`Compilando \x1b[36m${title}\x1b[0m con ${sceneFiles.length} escenas...`);

    const cleanedScenes = sceneFiles.map(scene => {
        const content = fs.readFileSync(scene.path, 'utf8');
        return cleanProse(content);
    });

    // Join scenes using the standard centeread separator
    const compiledBody = cleanedScenes.join('\n\n***\n\n');
    const fullChapterText = `# ${title}\n\n${compiledBody}\n`;

    const outputPath = path.join(capFolder, `capitulo_${capNum}_completo.md`);
    fs.writeFileSync(outputPath, fullChapterText, 'utf8');
    console.log(`\x1b[32m✔ Capítulo ${capNum} compilado con éxito en: capitulos/capitulo_${capNum}/capitulo_${capNum}_completo.md\x1b[0m`);
    
    return { capNum, title, text: fullChapterText };
}

function compileManuscript() {
    if (!fs.existsSync(capitulosDir)) {
        console.error('\x1b[31mError: El directorio capitulos/ no existe.\x1b[0m');
        return;
    }

    const items = fs.readdirSync(capitulosDir);
    const capFolders = items
        .filter(item => {
            const fullPath = path.join(capitulosDir, item);
            return fs.statSync(fullPath).isDirectory() && /^capitulo_\d+$/.test(item);
        })
        .map(item => {
            const num = parseInt(item.match(/\d+/)[0], 10);
            return { name: item, num };
        })
        .sort((a, b) => a.num - b.num);

    if (capFolders.length === 0) {
        console.error('\x1b[31mError: No se encontraron carpetas de capítulos en capitulos/\x1b[0m');
        return;
    }

    console.log(`Se encontraron ${capFolders.length} capítulos para el manuscrito maestro.`);
    const compiledChapters = [];

    for (const folder of capFolders) {
        const result = compileChapter(folder.num);
        if (result) {
            compiledChapters.push(result);
        }
    }

    if (compiledChapters.length === 0) {
        console.error('\x1b[31mError: No se pudo compilar ningún capítulo.\x1b[0m');
        return;
    }

    // Build the dynamic table of contents and cover page
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date().toLocaleDateString('es-ES', dateOptions);

    let manuscriptText = `# Manacraft\n`;
    manuscriptText += `**Autor:** Jonazao & Antigravity  \n`;
    manuscriptText += `**Fecha de Compilación:** ${formattedDate}  \n\n`;
    manuscriptText += `---\n\n`;
    manuscriptText += `## Tabla de Contenidos\n`;
    
    compiledChapters.forEach(cap => {
        const anchor = cap.title
            .toLowerCase()
            .replace(/[áàäâ]/g, 'a')
            .replace(/[éèëê]/g, 'e')
            .replace(/[íìïî]/g, 'i')
            .replace(/[óòöô]/g, 'o')
            .replace(/[úùüû]/g, 'u')
            .replace(/[ñ]/g, 'n')
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');
        if (cap.capNum === 0) {
            manuscriptText += `* [${cap.title}](#${anchor})\n`;
        } else {
            manuscriptText += `${cap.capNum}. [${cap.title}](#${anchor})\n`;
        }
    });

    manuscriptText += `\n---\n\n`;

    // Join all chapters
    manuscriptText += compiledChapters.map(cap => cap.text).join('\n\n---\n\n');

    const manuscriptPath = path.join(rootDir, 'manuscrito_completo.md');
    fs.writeFileSync(manuscriptPath, manuscriptText, 'utf8');
    console.log(`\x1b[32m\x1b[1m✔ Manuscrito completo compilado con éxito en: manuscrito_completo.md\x1b[0m`);
}

// Main execution block
if (targetCap !== null) {
    compileChapter(targetCap);
} else {
    compileManuscript();
}
