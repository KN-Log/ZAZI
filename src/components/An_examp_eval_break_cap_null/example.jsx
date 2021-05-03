import React, {useState, useEffect} from 'react';
import Majax from 'react-mathjax';
import {changeValue,containsErrorValue, setErrorValue } from './../../common/example';
import {CardText, Row, Col,Input,Card,CardBody,Button,Alert, Label, CustomInput} from 'reactstrap';

const Example=()=> {

    
    const [isError, setIsError] = useState(false);
    const [isLogicError, setIsLogicError] = useState(false);
    //PГ
    const [p_g, setP_g] = useState(0);
    const [p_gInpt, setP_gInpt] = useState(0);
    //l
    const [l, setL] = useState(0);
    const [lInpt, setLInpt] = useState(0);
    //Uф
    const [uf, setUf] = useState(0);
    const [ufInpt, setUfInpt] = useState(0);
    //Схема соединения
    //A,B
    const [ab,setABConnect]=useState(0);
    const [abInput, setABInput]=useState(0);
    //A
    const [a,setAConnect]=useState(0);
    //B
    const [b,setBConnect]=useState(0);
    //PГ<
    const [p_g_eq, setP_g_eq] = useState(0);
    const [p_g_eqInpt, setP_g_eqInpt] = useState(0);
    //Тип линии: 
    const [xn_e, setLineXn_e] = useState(0);
    const [xn_eInpt, setXn_eInpt] = useState(0);
    //Материал провода: 
    const [ro, setRo] = useState(0);
    const [roInpt, setRoInpt] = useState(0);
    //Kг
    const [k_g, setK_g] = useState(0);
    const [k_gInpt, setK_gInpt] = useState(0);


    //New value 
    const [alpha,set_alpha] = useState(0);
    const [Xnz,setXnz] = useState(0);
    const [k,setK] = useState(0);
    const [p1, setP1] = useState(0);
    const [Xf,setXf] = useState(0);
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
    

    const textStyle = {
        textIndent: "20px"
    };
    const inputStyle={
        width:"80px",
        height:"30px",
        display:"inline",
    };
    const selectStyle={
        width:"350px",
        height:"30px",
        display:"inline",
    }

    useEffect(() => {}, [Ikef])
    const resolve = () => {
        setIsError(false)

        
        setP_g(p_gInpt);
        setL(lInpt);
        setUf(ufInpt);
        setP_g_eq(p_g_eqInpt); 
        setABConnect(abInput);
        setRo(roInpt);
        setK_g(k_gInpt);
        setLineXn_e((xn_eInpt));


        {
            let res_Xf=0.0152;
            setXf(res_Xf.toFixed(4));
            let res_Xnz=0.0152;
            setXnz(res_Xnz.toFixed(4));  
        }



        
        switch(p_g_eq){
            case 1:
            setK(3);
            break;
            case 2:
            setK(1.4.toFixed(2));
            break;
            case 3:
            setK(1.25.toFixed(2));
            break;
            default:
            setK(1.4.toFixed(2));
            break;
        }
        
        let res_a,res_b;
        
        switch(ab){
            case 1:
                res_a=22.54;
                res_b=-0.1176;
                setAConnect(res_a.toFixed(2));
                setBConnect(res_b.toFixed(4));
            break;
            case 2:
                res_a=77.95;
                res_b=0.0648;
                setAConnect(res_a.toFixed(2));
                setBConnect(res_b.toFixed(4));
            break;
            default:
                break;
        }

        

        let res_p1=p_gInpt/3;
        setP1(res_p1.toFixed(2));
        
        let res_In = (Math.pow(10, 3)*p1/uf);
        setIn(res_In);

        let res_Ikz = k*In;
        setIkz(res_Ikz.toFixed(2));

        let res_Sf=In/parseFloat(k_g);
        setSf(res_Sf.toFixed(2));

        let res_Snz=Sf/2;
        setSnz(res_Snz.toFixed(2));

        let res_Rf=Math.pow(10,6)*Math.pow(10,-8)*ro*l/Sf;
        setRf(res_Rf.toFixed(2));

        let res_Rnz=Math.pow(10,6)*ro*Math.pow(10,-8)*l/Snz;
        setRnz(res_Rnz.toFixed(2));

        let res_alpha=Math.pow((uf/230),2);
        set_alpha(res_alpha.toFixed(2));
       
        let res_Zt=parseFloat(a)*parseFloat(alpha)/(parseFloat(p_g)+parseFloat(b));
        setZt(res_Zt.toFixed(2));

        let res_Xn=parseFloat(xn_e)*parseInt(l)*(Math.pow(10,-3));
        setXn(res_Xn.toFixed(2));
        
        let res_Zn=Math.sqrt(Math.pow((parseFloat(Rf)+parseFloat(Rnz)),2)+Math.pow((parseFloat(Xf)+parseFloat(Xnz)+parseFloat(Xn)),2));
        setZn(res_Zn.toFixed(2));

        let res_Ikef=parseFloat(uf)/(parseFloat(Zt)/parseFloat(3)+parseFloat(Zn));
        setIkef(res_Ikef.toFixed(2));
       
        if(parseFloat(Ikef) > parseFloat(Ikz)){
            setIsLogicError(false);
        }else{
            setIsLogicError(true);
        }
        
        if(containsErrorValue(res_Ikef)){
            setIsError(true);
            setErrorValue(res_Ikef);
            return;
        }
        


     
    }

    return (
        <Majax.Provider>
        <Row className="justify-content-center">
        <Col lg="9">
        <Card className="mt-3">
        <CardBody >
           <CardText style={textStyle}>
            <br/>Исходные данные
            <br/>1. Габаритная мощность <Majax.Node inline formula="P_{Г}= "/> <Input style={inputStyle} onChange={e=>setP_gInpt(changeValue(e))}/> <Majax.Node inline formula="кВА"/>
            <br/>2. Длина сети: <Majax.Node inline formula="l="/>  <Input style={inputStyle} onChange={e=>setLInpt(changeValue(e))}/> <Majax.Node inline formula="м"/>
            <br/>3. Фазное напряжение <Majax.Node inline formula="U_{ф}="/> <Input style={inputStyle} onChange={e=>setUfInpt(changeValue(e))}/> <Majax.Node inline formula="В"/>
            <br/><Label>4. Схема соединения:
                <CustomInput id="setABInput" type="select" style={selectStyle}  onChange={(e)=>{
                    const select_ab=e.target.value;
                    setABInput(parseInt(select_ab));
                }}>                
                    <option value="1">треугольник-звезда</option>
                    <option value="2">звезда-звезда</option>   
                </CustomInput>
            </Label>
            <br/><Label>5. Вид защиты:
                <CustomInput id="setP_g_eqInpt" type="select" style={selectStyle} onChange={(e)=>{
                    const select_plav=e.target.value;
                    setP_g_eqInpt(parseInt(select_plav));
                }}>                
                    <option value="1">для плавкой вставки </option>
                    <option value="2">для автомата защиты при  P {'<'} 100 </option>
                    <option value="3">для автомата защиты при P {'≥'} 100 </option>    
                </CustomInput> 
            </Label>
            <br/><Label> 6. Тип линии: 
                <CustomInput  id="setXn_eInpt" type="select" style={selectStyle} onChange={(e)=>{
                    const select_line=e.target.value
                    setXn_eInpt(parseFloat(select_line).toFixed(2));
                }}>
                    <option value="0.4">воздушная линии</option>
                    <option value="0.07">кабельная линия</option>
                </CustomInput>
            </Label>
            <br/>7. Материал провода: <Majax.Node inline formula="ρ="/> <Input style={inputStyle} onChange={e=>setRoInpt(changeValue(e))}/> <Majax.Node inline formula="А/мм^{2}"/>
            <br/>8. Допустимая плотность тока: <Majax.Node inline formula="K_{г}="/> <Input style={inputStyle} onChange={e=>setK_gInpt(changeValue(e))}/> <Majax.Node inline formula="А/мм^{2}"/>
            </CardText>
            <CardText>
                <Button onClick={resolve}>Рассчитать</Button>
            </CardText>
            <CardText>
                Расчет:
            </CardText>
            <CardText>
            1. Габаритная мощность на одну фазу:
            </CardText>
            <CardText className="text-center">
                <Majax.Node inline formula={`P_{1}=P_{Г}/3 = ${p_g}/3 = ${p1}кВ·A`} />
            </CardText>
            <CardText>
            2. Номинальный ток нагрузки на одну фазу:
            </CardText>
            <CardText className="text-center">
            <Majax.Node inline formula={`I_{н}=P_{1}/U_{ф} = 1·10^{3}·${p1}/${uf} = ${In}A`}/>
            </CardText>
            <CardText>
            3. Минимальное требующееся значение тока:
            </CardText>
            <CardText className="text-center">
            <Majax.Node inline formula={`I_{кз}≥k·I_{н} = ${k}·${In} = ${Ikz}A`}/>
            </CardText>
            <CardText>
            4. Требующееся значение сечения фазного провода:
            </CardText>
            <CardText className="text-center">
            <Majax.Node inline formula={`S_{ф}=I_{н}/K_{г} = ${In}/${k_g} = ${Sf}мм^{2}`}/>
            </CardText>
            <CardText>
            5. Требующееся значение сечения нулевого защитного провода:
            </CardText>
            <CardText className="text-center">
            <Majax.Node inline formula={`S_{нз}=S_{ф}/2 = ${Sf}/2 = ${Snz}мм^{2}`}/>
            </CardText>
            <CardText>
            6. Активное сопротивление фазного провода:
            </CardText>
            <CardText className="text-center">
            <Majax.Node inline formula={`R_{ф}=ρ·l/S_{ф} = 10^{6}·${ro}·10^{−8}·${l}/${Sf} = ${Rf}Ом`}/>
            </CardText>
            <CardText>
            7. Активное сопротивление нулевого защитного провода:
            </CardText>
            <CardText className="text-center">
            <Majax.Node inline formula={`R_{нз}=ρ·l/S_{нз} = 10^{6}·${ro}·10^{−8}·${l}/${Snz}= ${Rnz}Ом`}/>
            </CardText>
            <CardText>
            8. Вычислим значение  <Majax.Node inline formula="Z_{Т}"/>:
            </CardText>
            <CardText className="text-center">
            <Majax.Node inline formula={`Z_{Т}=A·α/(P_{Г}+B) = ${a}·${alpha}/(${p_g}+${b}) = ${Zt} Ом`}/>
            </CardText>
            <CardText>
            9. Вычислим значение  <Majax.Node inline formula="X_{п}"/>:
            </CardText>
            <CardText className="text-center">
            <Majax.Node inline formula={`X_{п}=X^{′}_{п}·l·1·10^{−3} = ${xn_e}·${l}·1·10^{−3}=${Xn}Ом/км`}/>
            </CardText>
            <CardText>
            10. Вычислим значение <Majax.Node inline formula="Z_{п}"/>:
            </CardText>
            <CardText className="text-center">
            <Majax.Node inline formula={`Z_{п}=\\sqrt{(R_{ф}+R_{нз})^{2}+(X_{ф}+X_{нз}+X_{п})^{2}} =\\sqrt{(${Rf} + ${Rnz})^{2}+(${Xf}+${Xnz}+${Xn})^{2}}=${Zn}Ом`}/>
            </CardText>
            <CardText>
            11. Вычислим <Majax.Node inline formula="I_{кэф}"/>:
            </CardText>
            <CardText className="text-center">
            <Majax.Node inline formula={`I_{кэф}=U_{ф}/(Z_{Т}/3+Z_{п}) = ${uf}/(${Zt}/3 + ${Zn}) = ${Ikef}A`}/>
            </CardText>
            <CardText>
            12.  <Majax.Node inline formula="I_{кэф} > I_{кз} →"/> Расчет окончен
            </CardText>
            <CardText className="text-center">
                <Majax.Node inline formula={`${Ikef} > ${Ikz}`}/> 
            </CardText>
            <CardText>
                <Majax.Node inline formula={`${Ikef}`}/> 
            </CardText>
            <Alert className="mt-3" color="danger" isOpen={isLogicError}>Условие не выполнено</Alert>
            <Alert className="mt-3" color="danger" isOpen={isError}>Невозможно посчитать</Alert>
        </CardBody>
        </Card>
        </Col>
        </Row>
        </Majax.Provider>
    );
}

export default Example;