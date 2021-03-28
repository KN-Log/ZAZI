import React, {useState} from 'react';
import Majax from 'react-mathjax';
import { changeValue, setRes, mathjaxNode } from './../../common/example';
import {CardText, Row, Col,Input,FormGroup,Label,Card,CardBody} from 'reactstrap';



const Example= () => {
    const [p, setP] = useState(0)
    const [pInpt, setPInpt] = useState(0)

    const [l, setL] = useState(0)
    const [lInpt, setLInpt] = useState(0)
    
    const [uf, setUf] = useState(0)
    const [ufInpt, setUfInpt] = useState(0)
   
    const [p_eq, setP_eq] = useState(0)
    const [p_eqInpt, setP_eqInpt] = useState(0)

    const [ro, setRo] = useState(0)
    const [roInpt, setRoInpt] = useState(0)
   
    const [k, setK] = useState(0)
    const [kInpt, setKInpt] = useState(0)

    const [xn_e, setXn_e] = useState(0)
    const [xn_eInpt, setXn_eInpt] = useState(0)

    const [p1, setP1] = useState(0);
    const [In, setIn] = useState(0);
    const [Ikz, setIkz] = useState(0);
    const [Sf, setSf] = useState(0);
    const [Snz, setSnz] = useState(0);
    const [Rf, setRf] = useState(0);
    const [Rnz, setRnz] = useState(0);
    const [Zt, setZt] = useState(0);
    const [Xn, setXn] = useState(0);
    const [Zn, setZn] = useState(0);
    const [Ikef,setIkef] = useState(0);
    const [alpha,set_alpha] = useState(0);

    const [Xf,setXf] = useState(0);
    const [Xnz,setXnz] = useState(0);


    const textStyle = {
        textIndent: "20px"
    };
    const inputStyle={
        width:"80px",
        height:"30px",
        display:"inline",
    };
    const selectStyle={
        width:"280px",
        height:"35px",
        display:"inline",
    }

    const resolve = () => {
      setP(pInpt);
      setL(lInpt);
      setUf(ufInpt);
      setP_eq(p_eqInpt);
      setK(kInpt);

        let res_Xf=0.0152;
        setXf(setRes(res_Xf,0));
        let res_Xnz=0.0152;
        setXnz(setRes(res_Xnz,0));
        

        let res_p1=p/3;
        setP1(setRes(res_p1, 0));

        let res_In = (Math.pow(10, 3)*p1/uf);
        setIn(setRes(res_In, 0));

        let res_Ikz = k*In;
        setIkz(setRes(res_Ikz, 0));

        let res_Sf=In/k;
        setSf(setRes(res_Sf, 0));

        let res_Snz=Sf/2;
        setSnz(setRes(res_Snz, 0));

        let res_Rf=ro*l/Sf;
        setRf(setRes(res_Rf,0));

        let res_Rnz=ro*l/Snz;
        setRnz(setRes(res_Rnz,0));

        let res_alpha=Math.pow((uf/230),2);
        set_alpha(setRes(res_alpha),0);
       
        //let res_Zt=a*alpha/(p+b);
        //setZt(setRes(res_Zt),0);

        let res_Xn=xn_e*l*Math.pow(10,-3);
        setXn(setRes(res_Xn),0);
        
        let res_Zn=Math.sqrt(Math.pow((Rf+Rnz),2)+Math.pow((Xf+Xnz+Xn),2));
        setZn(setRes(res_Zn),0);

       // let res_Ikef=Uf/(Zt/3+Zp)
       // setIkef(setRes(res_Ikef),0)

        if(Ikef>Ikz){
            return true;
        }else{
            return false;
        }
    }

    return (
        <Majax.Provider>
        <Row className="justify-content-center">
        <Col lg="9">
        <Card className="mt-3">
        <CardBody >
           <CardText className={textStyle}>
            <br/>Исходные данные
            <br/>1. Габаритная мощность <Majax.Node inline formula="P_{Г}= "/> <Input style={inputStyle}/> <Majax.Node inline formula="кВА"/>
            <br/>2. Длина сети: <Majax.Node inline formula="l="/>  <Input style={inputStyle}/> <Majax.Node inline formula="м"/>
            <br/>3. Фазное напряжение <Majax.Node inline formula="U_{ф}="/> <Input style={inputStyle}/> <Majax.Node inline formula="В"/>
            <br/>4. Схема соединения: 
                <Input type="select" style={selectStyle}>
                    <option>воздушная линии</option>
                    <option>кабельная линия</option>
                </Input>
            <br/>5. Вид защиты: автомат защиты при <Majax.Node inline formula="P_{Г}<"/> <Input style={inputStyle}/> <Majax.Node inline formula="кВА"/>
            <br/>6. Тип линии: <Majax.Node inline formula="X_{п}^{'}="/> <Input style={inputStyle}/> <Majax.Node inline formula="Ом/км"/>
            <br/>7. Материал провода: <Majax.Node inline formula="ρ="/> <Input style={inputStyle}/> <Majax.Node inline formula="кг/м^{3}"/>
            <br/>8. Допустимая плотность тока: <Majax.Node inline formula="K_{г}="/> <Input style={inputStyle}/> <Majax.Node inline formula="А/мм^{2}"/>
            </CardText>


            <CardText>
                Расчет
            </CardText>
            <CardText>
            1. Габаритная мощность на одну фазу:
            </CardText>
            <CardText>
                <Majax.Node inline formula="P_{1}=P_{Г}/3 = 22/3 = 7.33кВ·A"/>
            </CardText>
            <CardText>
            2. Номинальный ток нагрузки на одну фазу:
            </CardText>
            <CardText>
            <Majax.Node inline formula="I_{н}=P_{1}/U_{ф}= 1·10^{3}·7.33/380 = 19.30A"/>
            </CardText>
            <CardText>
            3. Минимальное требующееся значение тока:
            </CardText>
            <CardText>
            <Majax.Node inline formula="I_{кз}≥k·I_{н}= 1.4·19.30 = 27.02A"/>
            </CardText>
            <CardText>
            4. Требующееся значение сечения фазного провода:
            </CardText>
            <CardText>
            <Majax.Node inline formula="S_{ф}=I_{н}/K_{г}= 19.30/1.50 = 12.87мм^{2}"/>
            </CardText>
            <CardText>
            5. Требующееся значение сечения нулевого защитного провода:
            </CardText>
            <CardText>
            <Majax.Node inline formula="S_{нз}=S_{ф}/2 = 12.87/2 = 6.43мм^{2}"/>
            </CardText>
            <CardText>
            6. Активное сопротивление фазного провода:
            </CardText>
            <CardText>
            <Majax.Node inline formula="R_{ф}=ρ·l/S_{ф}= 10^{6}·1.75·10^{−8}·950/12.87 = 1.29 Ом"/>
            </CardText>
            <CardText>
            7. Активное сопротивление нулевого защитного провода:
            </CardText>
            <CardText>
            <Majax.Node inline formula="R_{нз}=ρ·l/S_{нз}= 10^{6}·1.75·10^{−8}·950/6.43 = 2.58 Ом"/>
            </CardText>
            <CardText>
            8. Вычислим значение  <Majax.Node inline formula="Z_{Т}"/>:
            </CardText>
            <CardText>
            <Majax.Node inline formula="Z_{Т}=A·α/(P_{Г}+B) = 22.54·2.73/(22−0.1176) = 2.81 Ом"/>
            </CardText>
            <CardText>
            9. Вычислим значение  <Majax.Node inline formula="X_{п}"/>:
            </CardText>
            <CardText>
            <Majax.Node inline formula="X_{п}=X^{′}_{п}·l·1·10^{−3}=0.4·950·1·10^{−3}=3.80·10^{−1}Ом/км"/>
            </CardText>
            <CardText>
            10. Вычислим значение <Majax.Node inline formula="Z_{п}"/>:
            </CardText>
            <CardText>
            <Majax.Node inline formula="Z_{п}=\sqrt{(R_{ф}+R_{нз})^{2}+(X_{ф}+X_{нз}+X_{п})^{2}}=\sqrt{(1.29 + 2.58)^{2}+(1.52·10−2+1.52·10−2+3.80·10−1)^{2}}=3.90Ом"/>
            </CardText>
            <CardText>
            11. Вычислим <Majax.Node inline formula="I_{кэф}"/>:
            </CardText>
            <CardText>
            <Majax.Node inline formula="I_{кэф}=U_{ф}/(Z_{Т}/3+Z_{п}) = 380/(2.81/3 + 3.90) = 78.58A"/>
            </CardText>
            <CardText>
            12. <Majax.Node inline formula="I_{кэф} > I_{кз}→"/> Расчет окончен
            </CardText>
        </CardBody>
        </Card>
        </Col>
        </Row>
        </Majax.Provider>
    );
}

export default Example;