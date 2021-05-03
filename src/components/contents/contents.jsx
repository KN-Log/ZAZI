import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardHeader, ListGroup, ListGroupItem, Row, Col, CardBody } from 'reactstrap';

const Contents = () => {
    return (
        <Row className="justify-content-center">
            <Col lg="6">
                <Card className="mt-3">
                    <CardHeader><h3>Оглавление</h3></CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem>
                                <NavLink to="/br_theor_info">1 - Краткие теоретические сведения</NavLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <NavLink to="/algo_opt_ground_dev">2 - Алгоритм оптимизации заземляющегоустройства</NavLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <NavLink to="/break_cap_neutral">3 - Оценка отключающей способности зануления</NavLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <NavLink to="/an_examp_eval_break_cap_null">4 - Пример оценки отключающей способности зануления</NavLink>
                            </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default Contents;