import React from 'react';
import Majax from 'react-mathjax';
import {CardText, Row, Col} from 'reactstrap';


const Example= () => {
    const textStyle = {
        textIndent: "20px"
    };

    return (
        <Majax.Provider>
        <Row className="justify-content-center">
        <Col lg="9">
           <CardText className={textStyle}>
            <br/>Исходные данные
            <br/>1. Габаритная мощность PГ= 22кВА
            <br/>2. Длина сети: l= 950м
            <br/>3. Фазное напряжениеUф= 380В
            <br/>4. Схема соединения: треугольник-звезда
            <br/>5. Вид защиты: автомат защиты при PГ 100 кВА 
            <br/>6. Тип линии: воздушная линия
            <br/>7. Материал провода: медь
            <br/>8. Допустимая плотность тока:Kг= 1.5А/мм2
            </CardText>
            <CardText>
                Расчет
            </CardText>
            <CardText>
            1. Габаритная мощность на одну фазу:
            </CardText>
            <CardText>
            P1=PГ/3 = 22/3 = 7.33кВ·A
            </CardText>
            <CardText>
            2. Номинальный ток нагрузки на одну фазу:
            </CardText>
            <CardText>
            Iн=P1/Uф= 1·103·7.33/380 = 19.30A
            </CardText>
            <CardText>
            3. Минимальное требующееся значение тока:
            </CardText>
            <CardText>
            Iкз≥k·Iн= 1.4·19.30 = 27.02A
            </CardText>
            <CardText>
            4. Требующееся значение сечения фазного провода:
            </CardText>
            <CardText>
            Sф=Iн/Kг= 19.30/1.50 = 12.87мм2
            </CardText>
            <CardText>
            5. Требующееся значение сечения нулевого защитного провода:
            </CardText>
            <CardText>
            Sнз=Sф/2 = 12.87/2 = 6.43мм2
            </CardText>
            <CardText>
            6. Активное сопротивление фазного провода:
            </CardText>
            <CardText>
            Rф=ρ·l/Sф= 106·1.75·10−8·950/12.87 = 1.29Ом
            </CardText>
            <CardText>
            7. Активное сопротивление нулевого защитного провода:
            </CardText>
            <CardText>
            Rнз=ρ·l/Sнз= 106·1.75·10−8·950/6.43 = 2.58Ом48
            </CardText>
            <CardText>
            8. Вычислим значениеZТ:
            </CardText>
            <CardText>
            ZТ=A·α/(PГ+B) = 22.54·2.73/(22−0.1176) = 2.81Ом
            </CardText>
            <CardText>
            9. Вычислим значениеXп:
            </CardText>
            <CardText>
            Xп=X′п·l·1·10−3= 0.4·950·1·10−3= 3.80·10−1Ом/км
            </CardText>
            <CardText>
            10. Вычислим значение  Zп:
            </CardText>
            <CardText>
            Zп=√(Rф+Rнз)2+ (Xф+Xнз+Xп)2==√(1.29 + 2.58)2+ (1.52·10−2+ 1.52·10−2+ 3.80·10−1)2=3.90Ом
            </CardText>
            <CardText>
            11. ВычислимIкэф:
            </CardText>
            <CardText>
            Iкэф=Uф/(ZТ/3 +Zп) = 380/(2.81/3 + 3.90) = 78.58A12.Iкэф Iкз→Расчет окончен
            </CardText>
        </Col>
        </Row>
        </Majax.Provider>
    );
}

export default Example;