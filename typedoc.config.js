module.exports = {
    $schema: 'https://typedoc.org/schema.json',
    entryPoints: ['./src/index.ts'],
    sort: ['source-order'],
    projectDocuments: ['./README.*.md', 'LICENSE'],
    navigationLinks: {
        Docs: 'https://kabeep.github.io/lunar-date-fns/',
        GitHub: 'https://github.com/kabeep/lunar-date-fns',
        NPM: 'https://www.npmjs.com/package/@kabeep/lunar-date-fns',
    },
    plugin: [
        'typedoc-material-theme',
        'typedoc-plugin-mdn-links',
        'typedoc-plugin-missing-exports',
        'typedoc-plugin-include-example',
        'typedoc-plugin-inline-sources',
        'typedoc-plugin-replace-text',
        'typedoc-plugin-rename-documents',
    ],
    themeColor: '#cb9820',
    replaceText: {
        inCodeCommentText: false,
        inCodeCommentTags: false,
        inMarkdown: true,
        replacements: [
            {
                pattern: 'README.md',
                replace: function () {
                    return '../index.html';
                },
            },
            {
                pattern: 'README.zh-CN.md',
                replace: function () {
                    return 'documents/____.html';
                },
            },
        ],
    },
    renameDocuments: {
        './README.zh-CN.md': '简体中文',
    },
};
