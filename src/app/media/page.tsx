"use client"
import React, {useState} from "react";

const Media : React.FC = () =>
{
    const [Num1, SetNum1] = useState<string>("");
    const [Num2, SetNum2] = useState<string>("");
    const [Num3, SetNum3] = useState<string>("");
    const [Num4, SetNum4] = useState<string>("");
    const [Num5, SetNum5] = useState<string>("");
    const [Result, SetResult] = useState<number>(0);

    function Calcular()
    {
        const N1 = parseFloat(Num1);
        const N2 = parseFloat(Num2);
        const N3 = parseFloat(Num3);
        const N4 = parseFloat(Num4);
        const N5 = parseFloat(Num5);
        if(isNaN(N1) || isNaN(N2) || isNaN(N3) || isNaN(N4) || isNaN(N5))
        {
            SetResult(NaN);
        }else
        {
            SetResult((N1 + N2 + N3 + N4 + N5) / 5);
        }
    }

    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center my-8">Média Escolar</h1>
            <div className="w-64 md:w-96 bg-cy2 border-2 border-solid border-cy3 p-4 flex flex-col items-center gap-4 rounded-xl">
                <div className="w-full flex flex-row flex-wrap justify-evenly items-center">
                    <div className="w-14">
                        <span>Nota 1:</span>
                        <br></br>
                        <input type="text" value={Num1} placeholder="" className="bg-cy1 rounded-lg w-full"
                        onChange={(e) => {SetNum1(e.target.value)}}></input>
                    </div>
                    <div className="w-14">
                        <span>Nota 2:</span>
                        <br></br>
                        <input type="text" value={Num2} placeholder="" className="bg-cy1 rounded-lg w-full"
                        onChange={(e) => {SetNum2(e.target.value)}}></input>
                    </div>
                    <div className="w-14">
                        <span>Nota 3:</span>
                        <br></br>
                        <input type="text" value={Num3} placeholder="" className="bg-cy1 rounded-lg w-full"
                        onChange={(e) => {SetNum3(e.target.value)}}></input>
                    </div>
                    <div className="w-14">
                        <span>Nota 4:</span>
                        <br></br>
                        <input type="text" value={Num4} placeholder="" className="bg-cy1 rounded-lg w-full"
                        onChange={(e) => {SetNum4(e.target.value)}}></input>
                    </div>
                    <div className="w-14">
                        <span>Nota 5:</span>
                        <br></br>
                        <input type="text" value={Num5} placeholder="" className="bg-cy1 rounded-lg w-full"
                        onChange={(e) => {SetNum5(e.target.value)}}></input>
                    </div>
                </div>
                <button className="bg-cy1 border-2 border-solid border-cy3 p-2 rounded-lg" onClick={() => {Calcular()}}>Calcular</button>
                {
                    isNaN(Result ?? NaN) ? <span>Algum valor está errado</span>:
                    <div className="flex flex-col">
                        <span>Média: {Result.toFixed(2)}</span>
                        {Result < 7 ? <span>Não Passou</span> : <span>Passou</span>}
                    </div>
                }
            </div>
        </div>
    )
}

export default Media;