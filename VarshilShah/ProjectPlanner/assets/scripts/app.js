class Tooltip {}
class ProjectItem {
    constructor(id,updateprojectFunc){
        this.updateprojectHandler = updateprojectFunc;
        this.id = id;
        this.connectswitchButton();
    }
    connectswitchButton(){
        const projectitemlist = document.getElementById(this.id);
        const switchbutton = projectitemlist.querySelector('button:last-of-type');
        switchbutton.addEventListener('click',this.updateprojectHandler.bind(this.id));
    }
}
class ProjectList {
    items = [];
    constructor(type){
        const pList = document.querySelectorAll(`#${type}-projects li`);    
        for(let i of pList){
            this.items.push(new ProjectItem(i.id,this.switchProject.bind(this)));
        }
    }
    setSwitchHandlerFunction(switchHandlerFunc){
        this.switchHandler = switchHandlerFunc;
    }
    addProject(obj){
    }
    switchProject(id){
        this.switchHandler(this.items.find(item => item.id === id));
        this.items = this.items.filter(item => item.id !== id);
    }
}
class App {
    static init(){
        const PLA = new ProjectList('active');
        const PLF = new ProjectList('finished');
        PLA.setSwitchHandlerFunction(PLF.addProject.bind(PLF));
        PLF.setSwitchHandlerFunction(PLA.addProject.bind(PLA));
    }
}
App.init();

