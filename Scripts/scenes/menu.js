var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Menu() {
            _super.call(this);
        }
        /**
         *
         */
        Menu.prototype.Start = function () {
            //Add menu Label
            this._menuLabel = new objects.Label("MENU SCENE", "60px", "Consolas", "#000000", 320, 240);
            this.addChild(this._menuLabel);
            //add the start button 
            this._startButton = new objects.Button("startButton", 320, 420, true);
            this.addChild(this._startButton);
            //Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            //add this scene to the global scenc=e contaianer
            core.stage.addChild(this);
        };
        //EVENT HANDLERS 
        Menu.prototype._startButtonClick = function (event) {
            //switch the scene
            //scene =config.Scene.PLAY;
            //core.changeScene();
            //for now change label text to clicked
            this._menuLabel.text = "Clicked";
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map