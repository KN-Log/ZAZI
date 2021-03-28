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
                где <Majax.Node inline formula="Z_{Т}" /> – полное внутреннее сопротивление трансформатора-источникапитающего тока;
            </CardText>
            <CardText className={textStyle}>
                    <Majax.Node inline formula="Z_{ф}=R_{ф}+jX_{ф}"/>
            </CardText>
            <CardText className={textStyle}>
                    – полное сопротивление фазного провода;
            </CardText>
            <CardText className={textStyle}>
                <Majax.Node inline formula="Z_{нз}=R_{нз}+jX_{нз}"/>
            </CardText>
            <CardText className={textStyle}>
                – сопротивление нулевого защитного провода; <Majax.Node inline formula="jX_{п}"/>– индуктивное со-противление петли "фаза-нуль".
            </CardText>
            <CardText className={textStyle}>
                Для срабатывания системы защиты от <Majax.Node inline formula="КЗ"/> необходимо обеспечитьтребующееся значение модуля тока <Majax.Node inline formula="I_{кз}"/>.
            </CardText>
            <CardText className={textStyle}>
                При <Majax.Node inline formula="5%"/> -м ужесточении требований к системе зануления вместо <Majax.Node inline formula="(5.8)"/> пишем для модуля <Majax.Node inline formula="I_{кз}"/>.
            </CardText>
            <CardText className={textStyle}>
                    <Majax.Node inline formula="I_{кз}=U_{ф}/(Z_{Т}/3 +Z_{п})"/>
            </CardText>
            <CardText className={textStyle}>
                где:
            </CardText>
            <CardText>
                <Majax.Node inline formula="Z_{п}=\sqrt{{(R_{ф}+R_{нз})2+(X_{ф}+X_{нз}+X_{п})2}}"/>
            </CardText>
            <CardText>
                <Majax.Node inline formula="Активное сопротивление R_{ф}, R_{нз}"/>
            </CardText>
            <CardText>
                <Majax.Node inline formula="R_{ф}, R_{нз}=\sum_{i=1}^{n}=1ρ_{i}·l_{i}/s_{i}"/>
            </CardText>
            <CardText>
                где  <Majax.Node inline formula="n"/>– число участков сети, образующих цепь "фаза-нуль"  <Majax.Node inline formula="ρ_{i}, S_{i}, l_{i}"/>–соответственно удельное сопротивление материала провода <Majax.Node inline formula="i"/>-гo участка, его сечение и длина. Значения <Majax.Node inline formula="Z_{Т}"/>в справочной литературе <Majax.Node inline formula="[1]"/> даются в табличном виде,но хорошо представимы соотношением (для напряжения первичнойцепи силового трансформатора <Majax.Node inline formula="< 15 кВ"/> и мощности <Majax.Node inline formula="P_{Г}>1кВА"/>)
            </CardText>
            <CardText>
                <Majax.Node inline formula="Z_{T}=Aα/(P_{Г}+B)[Ом]"/> <Majax.Node inline formula="(5.11)"/>
            </CardText>
            <CardText>
                где <Majax.Node inline formula="P_{Г}"/>– габаритная мощность силового трансформатора, кВА;AиB– коэффициенты, имеющие следующие значения:
            </CardText>
            <CardText>
                а) для схемы трансформатора звезда-звезда <Majax.Node inline formula="(Y/Y)"/>:
            </CardText>
            <CardText>
                <Majax.Node inline formula="A=77.95Ом·кВА,   B=0.0648 кВА"/>;
            </CardText>
            <CardText>
                б) для схемы трансформатора "треугольник-звезда" <Majax.Node inline formula="(∆/Y)"/>:
            </CardText>
            <CardText>
                <Majax.Node inline formula="A= 22.54Ом·кВА,   B=−0.1176кВА"/>;
            </CardText>
            <CardText>
                Для обеих схем  <Majax.Node inline formula="α=(Uф/230)^{2}"/>. С целью минимизации значения <Majax.Node inline formula="X_{п}"/> нулевые защитные проводники следует прокладывать совместнос фаз-ными или в непосредственной близости от них. При этомXпвычис-ляется по формуле:
            </CardText>
            <CardText>
                <Majax.Node inline formula=" X_{п}=X^{′}_{п}·l·10^{−3}"/>, <Majax.Node inline formula="(5.12)"/>
            </CardText>
            <CardText>
                где <Majax.Node inline formula="l"/>– длина сети в метрах, <Majax.Node inline formula="X^{′}_{п}=~\mathrm{
                                                \Bigg\{ \begin{matrix}
                                                \mbox{0.4Ом/км} - для&воздушной&линии\\
                                                \mbox{0.07Ом/км} - для&кабельных&линий\\
                                                \end{matrix}}"/>
            </CardText>
            <CardText>
                <Majax.Node inline formula="Xф, Xнз= 0.0152"/> <Majax.Node inline formula="Ом/км"/>
            </CardText> 
            <CardText>
                – для медного или алюминиевого провода.
                Для проведения расчётов при использовании стальных проводников, питающих электрическую цепь, следует воспользоватьсяданнымитаблицы <Majax.Node inline formula="5.2"/> Таблица    
            </CardText>
            <CardText>
                <Majax.Node inline formula="5.2"/> .Электрические характеристики стальных проводников
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
                б) Сопротивления <Majax.Node inline formula="(R, X)"/> проводника длиной <Majax.Node inline formula="l"/> метров определяютсясоотношением
            </CardText>
            <CardText>
                <Majax.Node inline formula="Z=Z_{1}·l·10^{−3} Ом"/>,   <Majax.Node inline formula="Z≡R,X"/>.
            </CardText>
            <CardText>
                С учётом изложенного составляем алгоритм оценки отключающейспособности зануления:
            </CardText>
            <CardText>
                1. Ввод данных <Majax.Node inline formula="P_{Г},l,U_{ф}"/>, схемы соединения обмоток, вида защиты от <Majax.Node inline formula="КЗ"/>.
            </CardText>
            <CardText>
                2. Габаритная мощность, приходящаяся на одну фазу: <Majax.Node inline formula="P_{1}=P_{Г}/3"/>
            </CardText>
            <CardText>                
                3. Номинальный ток нагрузки для одной фазы: <Majax.Node inline formula="I_{н}=P_{1}/U_{ф}"/>
            </CardText>   
            <CardText>
                4. Минимальное требующееся значение тока <Majax.Node inline formula="I_{кз}"/>:
            </CardText>
            <CardText>
            <Majax.Node inline formula="I_{кз}≤kI_{н}"/>,
            </CardText>
            <CardText>
                где
            </CardText>
            <CardText>
            <Majax.Node inline formula="k=~\mathrm{
                                                \Bigg\{ \begin{matrix}
                                                \mbox{3 -для плавкой вставки} \\
                                                \mbox{1.4 -для кабельных линий}&P_{Г}<100 кВА\\
                                                \mbox{1.25 -для автомата защиты при}&P_{Г}≥100 кВА \\
                                                \end{matrix}}"/>
            </CardText>
            <CardText>
                5. Требующееся сечение фазного провода
            </CardText>
            <CardText>
                <Majax.Node inline formula="S_{ф}=I_{н}/K_{г},мм^{2}"/> где <Majax.Node inline formula="K_{г}= 2А/мм^{2}"/>– допустимая плотность тока в фазном (а такжеи <Majax.Node inline formula="N"/>) проводе.
            </CardText>
            <CardText>
                6. Требующееся сечение нулевого защитного провода
            </CardText>
            <CardText>
                <Majax.Node inline formula="S_{нз}≥\frac{1}{2}S_{ф}"/>
            </CardText>
            <CardText>
                7. Активные сопротивления <Majax.Node inline formula="R_{ф}, R_{нз}"/> вычисляем по <Majax.Node inline formula="(5.10)"/>
            </CardText>
            <CardText>
                8. Оценим фактическое значение <Majax.Node inline formula="I_{кэ}"/>фтока короткого замыкания по <Majax.Node inline formula="(5.9)"/> с учетом соотношений <Majax.Node inline formula="(5.10)"/>,<Majax.Node inline formula="(5.12)"/>:
            </CardText>
            <CardText>
                <Majax.Node inline formula="I_{кэф}=U_{ф}/(Z_{Т}/3 +Z_{п})"/>
            </CardText>
            <CardText>
                9. Если <Majax.Node inline formula="I_{кэф}<I_{кз}"/>, то уменьшив <Majax.Node inline formula="K_{г}∈[1,2]"/> или <Majax.Node inline formula="ρ_{i}"/>, переходим к шагу 5.
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