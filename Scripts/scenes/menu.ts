module scenes {
    export class Menu extends objects.Scene {

        // PRIVATE INSTANCE VARIBLES
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }
        /**
         * 
         */
        public Start():void{
            //Add menu Label
            this._menuLabel=new objects.Label(
                "MENU SCENE", "60px", "Consolas", "#000000",320,240);
                this.addChild(this._menuLabel);
            //add the start button 
            this._startButton = new objects.Button("startButton", 320,420, true)
            this.addChild(this._startButton);

            //Start button event listener
            this._startButton.on("click", this._startButtonClick, this);

            //add this scene to the global scenc=e contaianer
            core.stage.addChild(this);
        }

        //EVENT HANDLERS 
        private _startButtonClick(event:createjs.MouseEvent):void {
            //switch the scene
            //scene =config.Scene.PLAY;
            //core.changeScene();
            //for now change label text to clicked
            this._menuLabel.text="Clicked";
        }
    }
}