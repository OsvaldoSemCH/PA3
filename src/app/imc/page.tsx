"use client"
import React, {useState} from "react";

const IMC : React.FC = () =>
{
    const [Peso, SetPeso] = useState<string>("");
    const [Altura, SetAltura] = useState<string>("");
    const [Imc, SetImc] = useState<number>(0);

    function Calcular()
    {
        const P = parseFloat(Peso);
        const A = parseFloat(Altura);
        if(isNaN(P) || isNaN(A))
        {
            SetImc(NaN);
        }else
        {
            if(A == 0)
            {
                SetImc(NaN);
            }else
            {
                SetImc(P / (A * A));
            }
        }
    }

    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center my-8">Cálculo Do IMC</h1>
            <div className="w-64 md:w-96 bg-cy2 border-2 border-solid border-cy3 p-4 flex flex-col items-center gap-4 rounded-xl">
                <div>
                    <span>Peso (kg):</span>
                    <br></br>
                    <input type="text" value={Peso} placeholder="Peso (kg)" className="bg-cy1 p-2 rounded-lg"
                    onChange={(e) => {SetPeso(e.target.value)}}></input>
                </div>
                <div>
                    <span>Altura (m):</span>
                    <br></br>
                    <input type="text" value={Altura} placeholder="Altura (m)" className="bg-cy1 p-2 rounded-lg"
                    onChange={(e) => {SetAltura(e.target.value)}}></input>
                </div>
                <button className="bg-cy1 border-2 border-solid border-cy3 p-2 rounded-lg" onClick={() => {Calcular()}}>Calcular</button>
                { !isNaN(Imc ?? NaN) ? (Imc ? <span>IMC: {Imc}</span> : <></>) : <span>Algum valor está errado</span>}
            </div>
        </div>
    )
}

export default IMC;