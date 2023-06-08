import React from "react";

export interface ISkill  {
    titel : string,
    img : string
}


export interface IExperiance  {
    img : any;
    duration : string;
    header : {
        titel : string;
        subTitel: string;
    },
    description : string;
}

export interface IProject  {
    img : string;
    tags : Array<string>
    link : string
    titel : string;
    description : string;
}

