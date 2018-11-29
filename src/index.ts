interface ILanguage {
    name: string;
    description: string;
    syntaxPattern: string;
}

export const Languages: ILanguage[] = [
    {
        name: "c",
        description: "C",
        syntaxPattern: "c",
    },
    {
        name: "cpp98",
        description: "C++ 98",
        syntaxPattern: "cpp",
    },
    {
        name: "cpp11",
        description: "C++ 11",
        syntaxPattern: "cpp",
    },
    {
        name: "java",
        description: "Java",
        syntaxPattern: "java",
    },
    {
        name: "csharp",
        description: "C#",
        syntaxPattern: "csharp",
    },
    {
        name: "python2",
        description: "Python2",
        syntaxPattern: "python",
    },
    {
        name: "python3",
        description: "Python3",
        syntaxPattern: "python",
    },
    {
        name: "node",
        description: "Node.js",
        syntaxPattern: "javascript",
    },
];
