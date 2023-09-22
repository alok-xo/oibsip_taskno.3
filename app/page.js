"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]); //keeping the previous data and adding new
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1) //means ww're splicing i th number se 1 (i means jo del krne wale h uska pura element del hoe ga)
    setmainTask(copytask)
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      //in t the title is coming from that object
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>{" "}
            {/*this is the title from line no.11  */}
            <h6 className="text-lg font-medium">{t.desc}</h6>{" "}
            {/*this is the desc  */}
          </div>
          <button
            onClick={() => {
              deleteHandler(i) //this was running automatically so i put it in a fnc
            }}
            className="bg-red-600 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-3xl font-bold text-center">
        Alok's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-xl border-zinc-800 border-2 rounded m-8 px-4 py-2"
          placeholder="Enter Title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-xl border-zinc-800 border-2 rounded m-8 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
