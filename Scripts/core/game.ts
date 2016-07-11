/// <reference path="_reference.ts"/>

/**
 * @author Tom Tsiliopoulos ttsliop@my.centennialcollege.ca
 * @studentID 300818577
 * @date July 4, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the boilerplate
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

namespace core {
    // Variable Declarations

    //declare a reference to the Preloader
    export let assets: createjs.LoadQueue;
    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");
    // create a reference to a stage container
    export let stage: createjs.Stage;

    let helloLabel: createjs.Text;

    let startButton: objects.Button; // reference to our button class

    //declare scene varibles
    let currentScene: objects.Scene;
    let scene:number; 

    //asset manifest for images and sounds
    //array to define assets
    let assetData = [
        {id: "startButton", src:"../../Assets/images/startButton.png"}

    ];
    /**
     * This method preloads assets
     * @method preload()
     * @returns {void}
     * 
     */

    function preload(){
        assets= new createjs.LoadQueue(); //instantiates the loader
        assets.installPlugin(createjs.Sound);
        assets.on("complete",init, this);
        assets.loadManifest(assetData);


    }
    /**
     * This method is the entry point for the application
     * 
     * @method init
     * @return {void}
     */
    function init(): void {
        stage = new createjs.Stage(canvas); // instatiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
        
        // setup the default scene
        scene = config.Scene.MENU;
        changeScene();
    }

    /**
     * This is the main game loop
     * 
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event: createjs.Event): void {
        //call the scene's update
        currentScene.Update();
        stage.update(); // refreshes the stage
    }

    /**
     * This is the startButton click event handler
     * 
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event: createjs.MouseEvent) {
        helloLabel.text = "clicked!";
    }

    function changeScene():void {

        //Launch various scenes
        switch(scene) {
            //show the MENU scene
            case config.Scene.MENU:
            stage.removeAllChildren();
            //menu = new scenes.Menu(); 
            //currentScene = menu;
            break;
            //show the PLAY scene
            case config.Scene.PLAY:
            stage.removeAllChildren();
            //play = new scen.Play();
            //currentScene = play;
            break;
            //show the OVER scene
            case config.Scene.OVER:
            stage.removeAllChildren();
            //over = new scene.Over();
            //currentScene = over;

            break;
        }
    }

    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++