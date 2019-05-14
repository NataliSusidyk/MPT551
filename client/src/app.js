import Controller from "./Controller.js";
import View from "./View.js";
import Model from "./Model.js";


let view = new View();
let model = new Model();
let controller = new Controller(view,model);