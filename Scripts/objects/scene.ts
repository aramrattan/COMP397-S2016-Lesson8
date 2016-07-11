module objects{
    /**
     * This abstract scene class is used to create individual scenes
     * 
     * @export
     * @abstract
     * @class Scene
     * @extends {createjs.Container}
     */
    export abstract class Scene extends createjs.Container{
        constructor(){
            super();//super class in this case is empty

            this.Start();
        }
        /**
         * This method id the entry point for the appication
         * 
         * @method Start
         * @returns {void}
         */

        public Start():void{
            core.stage.addChild(this);
        }
        /**
         * Updates game objects in the scene method
         * 
         * @method Update
         * @returns {void}
         */
        public Update():void{

        }
    }
}