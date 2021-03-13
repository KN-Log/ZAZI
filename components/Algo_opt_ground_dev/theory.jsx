import React from 'react';
import Majax from 'react-mathjax';
import {CardText, Row, CardTitle, Col } from 'reactstrap';

const Theory = () => {
    const textStyle = {
        textIndent: "20px"
    };

    return (
     <Majax.Provider>
        <Row className="justify-content-center">
        <Col lg="9">
           <CardText className={textStyle}>
                С учётом изложенного алгоритм оптимизации заземляющего устрой-ства имеет следующий вид:
            </CardText>
            <CardText>
                1. Ввод исходных данных: <Majax.Node inline formula="L, L1(L1> L), d, d1F, ρВ, ρГ, S1, S2, Rдоп"/>  Для рабочего заземления дополнительно вводится ток <Majax.Node inline formula="I"/>. После ис-пользования таблицы с коэффициентами сезонности из <Majax.Node inline formula="[1]"/> выпол-няется ввод <Majax.Node inline formula="Ψ1,Ψ2"/>
            </CardText>
            <CardText>
                2. Положим <Majax.Node inline formula="N=1, V=104 дм3." />
            </CardText>
            <CardText>
                3. По <Majax.Node inline formula="(5.1) и (5.2)"/> или <Majax.Node inline formula="(5.3) и (5.4)"/> вычисляем <Majax.Node inline formula="R′В, R′Г(илиRВ, RГ)"/>.
            </CardText>
            <CardText>    
                4. С учётом <Majax.Node inline formula="(5.6)"/> вычислим <Majax.Node inline formula="(5.5)"/>.
            </CardText>    
            <CardText>
                5. Проверим выполнение условия <Majax.Node inline formula="RЗ<Rдоп"/>, при выполнении этогоусловия переходим к шагу <Majax.Node inline formula="7"/>, иначе к шагу <Majax.Node inline formula="6"/>.
            </CardText>    
            <CardText>    
                6. Положим <Majax.Node inline formula="N=N+1"/> и переходим к шагу <Majax.Node inline formula="3"/>.
            </CardText>    
            <CardText>    
                7. Если заземление защитное, то <Majax.Node inline formula="S1= 1см2,S= 5см2"/>, переходим кшагу 12. Если заземление – рабочее, то переходим к шагу 8.
            </CardText>    
            <CardText>    
                8. По (5.7) вычисляем сечения горизонтальногоS1и вертикальногоSэлектродов. Объём металла, составляющего конструкцию заземле-ния, равенV∗=S L N+S1L1(N−1).
            </CardText>    
            <CardText>
                9. Если <Majax.Node inline formula="V∗<V"/>, то <Majax.Node inline formula="V=V∗"/>.
            </CardText>
            <CardText>
                10. Положим <Majax.Node inline formula="L=L+∆"/>, <Majax.Node inline fomrula="L1=L1+∆"/>, <Majax.Node inline formula="F=F+∆,∆≤0.01L"/>.
            </CardText>
            <CardTitle>  
                11. Проверим условия: <Majax.Node inline formula="L≤Lмакс, L1≤L1макс, F≤Fмакс"/>.Выполнение этих условий (хотя бы одного) переводит вычисленияна шаг <Majax.Node inline formula="3"/>.
            </CardTitle>
            <CardText> 
                12. Окончание расчётов.
           </CardText>
        </Col>
        </Row>
     </Majax.Provider>
    );
}

export default Theory;