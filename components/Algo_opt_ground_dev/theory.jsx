import React from 'react';
import Majax from 'react-mathjax';
import { Card, CardBody, CardText, Row, CardTitle, Col } from 'reactstrap';

const Theory = () => {
    const textStyle = {
        textIndent: "20px"
    };

    return (
        <Majax.Provider>
            <Row className="justify-content-center">
                <Col lg="9">
                    <Card className="mt-3">
                        <CardBody >
                            <CardText className={textStyle}>
                                С учётом изложенного алгоритм оптимизации заземляющего устрой-ства имеет следующий вид:
                            </CardText>
                            <CardText>
                                1. Ввод исходных данных: <Majax.Node inline formula="L, L_{1}(L_{1}> L), d, d_{1}F, ρ_{В}, ρ_{Г}, S_{1}, S_{2}, R_{доп}" />  Для рабочего заземления дополнительно вводится ток <Majax.Node inline formula="I" />. После использования таблицы с коэффициентами сезонности из <Majax.Node inline formula="[1]" /> выполняется ввод <Majax.Node inline formula="Ψ_{1},Ψ_{2}" />
                            </CardText>
                            <CardText>
                                2. Положим <Majax.Node inline formula="N=1, V=10^{4} дм^{3}." />
                            </CardText>
                            <CardText>
                                3. По <Majax.Node inline formula="(5.1) и (5.2)" /> или <Majax.Node inline formula="(5.3) и (5.4)" /> вычисляем <Majax.Node inline formula="R^{′}_{В}, R^{′}_{Г} " />(или <Majax.Node inline formula="R_{В}, R_{Г}"/> ). 
                            </CardText>
                            <CardText>
                                4. С учётом <Majax.Node inline formula="(5.6)" /> вычислим <Majax.Node inline formula="(5.5)" />.
                            </CardText>
                            <CardText>
                                5. Проверим выполнение условия <Majax.Node inline formula="R_{З}<R_{доп}" />, при выполнении этогоусловия переходим к шагу <Majax.Node inline formula="7" />, иначе к шагу <Majax.Node inline formula="6" />.
                            </CardText>
                            <CardText>
                                6. Положим <Majax.Node inline formula="N=N+1" /> и переходим к шагу <Majax.Node inline formula="3" />.
                            </CardText>
                            <CardText>
                                7. Если заземление защитное, то <Majax.Node inline formula="S_{1}=1см^{2},S=5см^{2}" />, переходим кшагу <Majax.Node inline formula="12"/>. Если заземление – рабочее, то переходим к шагу <Majax.Node inline formula="8"/>.
                            </CardText>
                            <CardText>
                                8. По <Majax.Node inline formula="(5.7)"/> вычисляем сечения горизонтального <Majax.Node inline formula="S_{1}"/> и вертикальногоSэлектродов. Объём металла, составляющего конструкцию заземления, равен:
                            </CardText>
                            <CardText className="text-center">  
                                <Majax.Node inline formula="V_{∗}=SLN+S_{1}L_{1}(N−1)"/>.
                            </CardText>
                            <CardText>
                                9. Если <Majax.Node inline formula="V_{∗}<V" />, то <Majax.Node inline formula="V=V_{∗}" />.
                            </CardText>
                            <CardText>
                                10. Положим:
                            </CardText>
                            <CardText className="text-center">  
                                <Majax.Node inline formula="L=L+∆" />, <Majax.Node inline formula="L_{1}=L_{1}+∆" />, <Majax.Node inline formula="F=F+∆,∆≤0.01L" />.
                            </CardText>
                            <CardText>
                                11. Проверим условия:
                            </CardText>
                            <CardText className="text-center">
                            <Majax.Node inline formula="L≤L_{макс}, L_{1}≤L_{1 макс}, F≤F_{макс}" />
                            </CardText>
                            <CardText>
                                Выполнение этих условий (хотя бы одного) переводит вычисленияна шаг <Majax.Node inline formula="3" />.
                            </CardText>
                            <CardText>
                                12. Окончание расчётов.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Majax.Provider>
    );
}

export default Theory;