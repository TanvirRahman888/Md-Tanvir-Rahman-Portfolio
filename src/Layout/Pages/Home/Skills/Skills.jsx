import html from "../../../../assets/html5.png";
import css from "../../../../assets/CSS3.png";
import tailwind from "../../../../assets/tailwindcss.png"
import js from "../../../../assets/JS.png"
import react from "../../../../assets/react.png"
import daisyUI from "../../../../assets/daisyUI.svg"
import firebase from "../../../../assets/firebase.png"
import node from "../../../../assets/Node.js.png"
import express from "../../../../assets/Express.png"
import mongoDB from "../../../../assets/MongoDB.png"
import jwt from "../../../../assets/jwt.png"
import git from "../../../../assets/git.png"

const Skills = () => {
    return (
        <div className="mx-auto border-2 border-amber-500 rounded-xl my-7 py-5" id="skills">
            <p className="text-2xl mx-auto text-center my-5 ">My Skills</p>
            <hr className="h-1 mx-5 my-5 text-amber-500" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-items-center-safe gap-5 px-4">

                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={html} alt="" className="" />
                    <h2 className="text-xl">HTML5</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={css} alt="" className="" />
                    <h2 className="text-xl">CSS3</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={tailwind} alt="" className="" />
                    <h2 className="text-xl">Tailwind</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={js} alt="" className="" />
                    <h2 className="text-xl">JavaScript</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={react} alt="" className="" />
                    <h2 className="text-xl">React</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={daisyUI} alt="" className="" />
                    <h2 className="text-xl">daisyUI</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={firebase} alt="" className="" />
                    <h2 className="text-xl">Firebase</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={node} alt="" className="" />
                    <h2 className="text-xl">Node</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={express} alt="" className="" />
                    <h2 className="text-xl">Express</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={mongoDB} alt="" className="" />
                    <h2 className="text-xl">Mongo DB</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={jwt} alt="" className="" />
                    <h2 className="text-xl">JWT</h2>
                </div>
                <div className="border-2  border-amber-500 rounded-xl p-3 w-32 h-40 text-center">
                    <img src={git} alt="" className="" />
                    <h2 className="text-xl">GitHub</h2>
                </div>

            </div>
        </div>
    );
};

export default Skills;