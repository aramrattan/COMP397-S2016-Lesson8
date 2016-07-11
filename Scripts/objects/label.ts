module objects {

    

/**
 * This is a generic Label class for the Game BoilerPlate
 * 
 * @export
 * @class Label
 * @extends {createjs.Bitmap}
 */

    export class Label extends createjs.Text {
        constructor(
            labelString:string,
            fontSize: string,
            fontFamily:string,
            fontColour:string,
            x:number,
            y:number
        ) {
            super(labelString, (fontSize+ " "+fontFamily), fontColour)    
            
            this.regX = this.getMeasuredWidth()*0.5; 
            this.regY = this.getMeasuredHeight()*0.5;
            //assign label coordinates 
            this.x=x;
            this.y=y;

        }
    }
}