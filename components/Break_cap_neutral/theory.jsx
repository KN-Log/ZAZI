import React from 'react';
import Majax from 'react-mathjax';
import {CardText, Row, Col} from 'reactstrap';
import img1 from './img/img1.png';

const Theory = () => {
    const textStyle = {
        textIndent: "20px"
    };

    return (
     <Majax.Provider>
        <Row className="justify-content-center">
            <Col lg="9">
            <CardText className={textStyle}>
                При коротком замыкании (КЗ) в цепи "фаза-нуль" сила тока составит:
            </CardText>
            <CardText className={textStyle}>
                <Majax.Node inline formula="I_{кз}=\frac{U_{ф}}{Z_{Т}/3+Z_{ф}+Z_{нз}+jX_{п}}"/>
            </CardText>
            <CardText className={textStyle}>
                где <Majax.Node inline formula="ZТ" /> – полное внутреннее сопротивление трансформатора-источникапитающего тока;
            </CardText>
            <CardText className={textStyle}>
                    <Majax.Node inline formula="Z_{ф}=R_{ф}+jX_{ф}"/>
            </CardText>
            <CardText className={textStyle}>
                    – полное сопротивление фазного провода;
            </CardText>
            <CardText className={textStyle}>
                <Majax.Node inline formula="Zнз=Rнз+jXнз"/>
            </CardText>
            <CardText className={textStyle}>
                – сопротивление нулевого защитного провода; <Majax.Node inline formula="jXп"/>– индуктивное со-противление петли "фаза-нуль".
            </CardText>
            <CardText className={textStyle}>
                Для срабатывания системы защиты от <Majax.Node inline formula="КЗ"/> необходимо обеспечитьтребующееся значение модуля тока <Majax.Node inline formula="Iкз"/>.
            </CardText>
            <CardText className={textStyle}>
                При <Majax.Node inline formula="5%"/> -м ужесточении требований к системе зануления вместо <Majax.Node inline formula="(5.8)"/> пишем для модуля <Majax.Node inline formula="Iкз"/>.
            </CardText>
            <CardText className={textStyle}>
                    <Majax.Node inline formula="Iкз=Uф/(ZТ/3 +Zп)"/>
            </CardText>
            <CardText className={textStyle}>
                где:
            </CardText>
            <CardText>
                <Majax.Node inline formula="Zп=sqrt{(Rф+Rнз)2+(Xф+Xнз+Xп)2}"/>
            </CardText>
            <CardText>
                <Majax.Node inline formula="Активное сопротивление Rф, Rнз"/>
            </CardText>
            <CardText>
                <Majax.Node inline formula="Rф, Rнз=n∑i=1ρi·li/si"/>
            </CardText>
            <CardText>
                где  <Majax.Node inline formula="n"/>– число участков сети, образующих цепь "фаза-нуль" ρi, Si, li–соответственно удельное сопротивление материала проводаi-гo участ-ка, его сечение и длина.ЗначенияZТв справочной литературе [1] даются в табличном виде,но хорошо представимы соотношением (для напряжения первичнойцепи силового трансформатора <Majax.Node inline formula="< 15 кВ"/> и мощности <Majax.Node inline formula="PГ>1кВА"/>)
            </CardText>
            <CardText>
                <Majax.Node inline formula="ZT=Aα/(PГ+B)[Ом]"/> <Majax.Node inline formula="(5.11)"/>
            </CardText>
            <CardText>
                где <Majax.Node inline formula="PГ"/>– габаритная мощность силового трансформатора, кВА;AиB– коэффициенты, имеющие следующие значения:
            </CardText>
            <CardText>
                а) для схемы трансформатора звезда-звезда (Y/Y):
            </CardText>
            <CardText>
                A= 77.95Ом·кВА,   B= 0.0648кВА;
            </CardText>
            <CardText>
                б) для схемы трансформатора "треугольник-звезда" (∆/Y):
            </CardText>
            <CardText>
                A= 22.54Ом·кВА,   B=−0.1176кВА;
            </CardText>
            <CardText>
                Для обеих схемα=(Uф/230)2. С целью минимизации значенияXпну-левые защитные проводники следует прокладывать совместнос фаз-ными или в непосредственной близости от них. При этомXпвычис-ляется по формуле:
            </CardText>
            <CardText>
                Xп=X′п·l·10−3,(5.12)
            </CardText>
            <CardText>
                где l– длина сети в метрах,
                X′п=0.4Ом/км   – для воздушной линии,
                0.07Ом/км  – для кабельных линий. 
            </CardText>
            <CardText>
                <Majax.Node inline formula="Xф, Xнз= 0.0152"/> <Majax.Node inline formula="Ом/км"/>
            </CardText> 
            <CardText>
                – для медного или алюминиевого провода.
                Для проведения расчётов при использовании стальных проводни-ков, питающих электрическую цепь, следует воспользоватьсяданнымитаблицы <Majax.Node inline formula="5.2"/> Таблица    
            </CardText>
            <CardText>
                <Majax.Node inline formula="5.2"/>.Электрические характеристики стальных проводников
            </CardText>
            <CardText>
            <br/><img alt="img1" src={img1} /><br/>
            </CardText>
            <CardText>
                Примечания к таблице <Majax.Node inline formula="5.2"/>:
            </CardText>
            <CardText>
                а) <Majax.Node inline formula="*"/> – проводник круглого сечения, <Majax.Node inline formula="**"/> – проводник прямоугольногосечения толщиной <Majax.Node inline formula="4 мм"/>;
            </CardText>
            <CardText>
                б) Сопротивления <Majax.Node inline formula="(R, X)"/> проводника длинойlметров определяютсясоотношением
            </CardText>
            <CardText>
                <Majax.Node inline formula="Z=Z1·l·10−3Ом"/>,   <Majax.Node inline formula="Z≡R,X"/>.
            </CardText>
            <CardText>
                С учётом изложенного составляем алгоритм оценки отключающейспособности зануления:
            </CardText>
            <CardText>
                1. Ввод данных <Majax.Node inline formula="PГ,l,Uф"/>, схемы соединения обмоток, вида защиты от <Majax.Node inline formula="КЗ"/>.
            </CardText>
            <CardText>
                2. Габаритная мощность, приходящаяся на одну фазу: <Majax.Node inline formula="P1=PГ/3"/>
            </CardText>
            <CardText>                
                3. Номинальный ток нагрузки для одной фазы: <Majax.Node inline formula="Iн=P1/Uф46"/>
            </CardText>   
            <CardText>
                4. Минимальное требующееся значение тока <Majax.Node inline formula="Iкз"/>:
            </CardText>
            <CardText>
            <Majax.Node inline formula="Iкз≤kIн"/>,
            </CardText>
            <CardText>
                где
            </CardText>
            <CardText>
                <Majax.Node inline formula="k=3"/>– для плавкой вставки
                <Majax.Node inline formula="1.4"/>– для автомата защиты при
                <Majax.Node inline formula="PГ<100"/> кВА
                <Majax.Node inline formula="1.25"/>– для автомата защиты при <Majax.Node inline formula="PГ≥100"/> кВА
            </CardText>
            <CardText>
                5. Требующееся сечение фазного провода
            </CardText>
            <CardText>
                <Majax.Node inline formula="Sф=Iн/Kг,мм2гдеKг= 2А/мм2"/>– допустимая плотность тока в фазном (а такжеиN) проводе.
            </CardText>
            <CardText>
                6. Требующееся сечение нулевого защитного провода
            </CardText>
            <CardText>
                <Majax.Node inline formula="Sнз≥12Sф"/>
            </CardText>
            <CardText>
                7. Активные сопротивленияRф, Rнзвычисляем по <Majax.Node inline formula="(5.10)"/>
            </CardText>
            <CardText>
                8. Оценим фактическое значениеIкэфтока короткого замыкания по <Majax.Node inline formula="(5.9)"/> с учетом соотношений <Majax.Node inline formula="(5.10)"/>, <Majax.Node inline formula="(5.12)"/>:
            </CardText>
            <CardText>
                <Majax.Node inline formula="Iкэф=Uф/(ZТ/3 +Zп)"/>
            </CardText>
            <CardText>
                9. Если <Majax.Node inline formula="Iкэф<Iкз"/>, то уменьшив <Majax.Node inline formula="Kг∈[1,2]"/> или <Majax.Node inline formula="ρi"/>, переходим к шагу 5.
            </CardText>
            <CardText>
                10. Окончание вычислений.
            </CardText>
            </Col>
        </Row>
     </Majax.Provider>
    );
}

export default Theory;