interface ILanguage {
    name: string;
    description: string;
    syntaxPattern: string;
    ext: string;
}

export const Languages: ILanguage[] = [
    {
        name: "c",
        description: "C",
        syntaxPattern: "c",
        ext: "c",
    },
    {
        name: "cpp98",
        description: "C++ 98",
        syntaxPattern: "cpp",
        ext: "cpp",
    },
    {
        name: "cpp11",
        description: "C++ 11",
        syntaxPattern: "cpp",
        ext: "cpp",
    },
    {
        name: "cpp14",
        description: "C++ 14",
        syntaxPattern: "cpp",
        ext: "cpp",
    },
    {
        name: "cpp17",
        description: "C++ 17",
        syntaxPattern: "cpp",
        ext: "cpp",
    },
    {
        name: "java",
        description: "Java",
        syntaxPattern: "java",
        ext: "java",
    },
    {
        name: "csharp",
        description: "C#",
        syntaxPattern: "csharp",
        ext: "cs",
    },
    {
        name: "python2",
        description: "Python2",
        syntaxPattern: "python",
        ext: "py",
    },
    {
        name: "python3",
        description: "Python3",
        syntaxPattern: "python",
        ext: "py",
    },
    {
        name: "node",
        description: "Node.js",
        syntaxPattern: "javascript",
        ext: "js",
    },
];
