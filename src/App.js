import React from "react";
import workouts from "./api/workouts";
import dayjs from "dayjs";

const style = {
  bg: `w-screen h-screen px-4 py-8 bg-[#EAE7E7]`,
  details: `bg-white w-full rounded overflow-hidden`,
  summary: `flex font-semibold text-xl justify-between items-center bg-[#ff403d] p-4`,
  data: `flex flex-col gap-4 pt-4`,
  span: `text-red-500 ml-2 font-medium text-xs uppercase`,
  footer: `text-center pt-4`,
};

function App() {
  const today = dayjs().format("dddd");
  const todaysWorkout = workouts.filter((date) => date.day === today);

  return (
    <>
      <header className="bg-[#ff403d] p-4">
        <div className="mx-auto max-w-screen-lg">
          <div className="flex items-center justify-between bg-[#160203] p-1.5 w-fit gap-2">
            <span className="text-xl">💪</span>
            <p className="text-xl font-medium text-[#fefbea]">
              Workout of the Day
            </p>
          </div>
        </div>
      </header>

      <section className={style.bg}>
        <div className="flex flex-wrap gap-4 justify-between mx-auto max-w-screen-lg">
          {todaysWorkout.length === 0 ? <p>Relax! Take a break today.</p> : null}
          {todaysWorkout.map((today, index) => (
            <div key={index} className={style.details}>
              <div className={style.summary}>
                <span>
                  {today.day} - {today.title}
                </span>
              </div>

              <div className={style.data}>
                <table>
                  <tbody>
                    {today.workout.map((workout, index) => (
                      <tr key={index}>
                        <td className="font-medium p-2">{workout.exercise}</td>
                        <td className="font-light p-2">{workout.reps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <p className={style.footer}>Coded by William Miguel</p>
      </section>
    </>
  );
}

export default App;
