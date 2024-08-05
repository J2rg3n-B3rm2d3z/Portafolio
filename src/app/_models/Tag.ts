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
    static readonly SQLITE = new Tag('SQLite','silver');
    static readonly SQLSERVER = new Tag('SQLServer','gray');
    static readonly SQLSERVERMANAGEMENT = new Tag('SQLServer Management Studio','goldenrod');
    static readonly BOOTSTRAP = new Tag('Bootstrap','darkorchid');
    static readonly CPLUSPLUS = new Tag('C++','darkblue');
    static readonly VISUALBASIC = new Tag('Visual Basic','dodgerblue');
    static readonly CSS = new Tag('CSS','lightsteelblue');
    static readonly HTML = new Tag('HTML','darkorange');
    static readonly REDUX = new Tag('Redux','darkviolet');
    static readonly JWT = new Tag('JWT','lightgreen');
    static readonly VISUALSTUDIOCODE = new Tag('Visual Studio Code','royalblue');
    static readonly VISUALSTUDIO = new Tag('Visual Studio Community','rebeccapurple');
    static readonly FIGMA = new Tag('Figma','salmon');
    static readonly DRAWIO = new Tag('Draw.io','orangered');
    static readonly FIREBASE = new Tag('Firebase','firebrick');
    static readonly WPF = new Tag('WPF','mediumslateblue');
    static readonly BLENDER = new Tag('Blender','sandybrown');
    static readonly PHOTOSHOP = new Tag('Photoshop','steelblue');
    static readonly ILLUSTRADOR = new Tag('Illustrador','sienna');
    static readonly WINDOWSSERVER = new Tag('Windows Server','lightseagreen');
    static readonly LINUX = new Tag('Linux','black');
    static readonly UBUNTU = new Tag('Ubuntu','chocolate');
    static readonly DEBIAN = new Tag('Debian','crimson');
    static readonly KALILINUX = new Tag('Kali Linux','deepskyblue');
    static readonly WORD = new Tag('Word','steelblue');
    static readonly PROJECT = new Tag('Project','seagreen');
    static readonly EXCEL = new Tag('Exel','darkgreen');

    static readonly REDES = new Tag('Redes','darkgreen');
    static readonly XML = new Tag('Xml','darkgreen');
    static readonly VIRTUALBOX = new Tag('Virtual box','cornflowerblue');
    static readonly GOOGLECOLAB = new Tag('Google Colab','darkgoldenrod');
    static readonly IA = new Tag('IA','mediumvioletred');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}