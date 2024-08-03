//This class is for tags of tecnology that use in projects.
//If this change (add o delete tags) you shuold edit the portfolio component.

export class Tag{
    static readonly ANGULAR = new Tag('Angular','darkred');
    static readonly TYPESCRIPT = new Tag('TypeScript','teal');
    static readonly PYTHON = new Tag('Python','darkgreen');
    static readonly CSHARP = new Tag('C#','darkmagenta');
    static readonly JAVA = new Tag('Java','orange');
    static readonly NODEJS = new Tag('Node.Js','olivedrab');
    static readonly ASPNET = new Tag('ASP.NET','mediumpurple');
    static readonly JAVASCRIPT = new Tag('JavaScript','gold');
    static readonly REACT = new Tag('React','lightseagreen');
    static readonly ANDROIDSTUDIO = new Tag('Android Studio','darkolivegreen');
    static readonly KOTLIN = new Tag('Kotlin','indigo');
    static readonly TURBOC = new Tag('Turbo C','darkolivegreen');
    static readonly C = new Tag('C','cadetblue');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}