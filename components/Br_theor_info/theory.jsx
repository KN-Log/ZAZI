import React from 'react';
import Majax from 'react-mathjax';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import {CardText, Row, Col } from 'reactstrap';

const Theory = () => {
    const textStyle = {
        textIndent: "20px"
    };

    return (
     <Majax.Provider>
        <Row className="justify-content-center">
          <Col lg="9">
           <CardText className={textStyle}>
               Для обеспечения электробезопасности установки связи должны вы-полняться в соответствии с <Majax.Node inline formula="[7]"/>
           </CardText>
           <CardText className={textStyle}>
               <br/>
               Заземление нетоковедущих металлических частей электроустано-вок и нейтрали источника тока проводится с целью обеспечения элек-тробезопасности (защитное заземление), 
               заземление токоведущих частей электроустановок необходимо для обеспечения их нормальной работы (рабочее заземление).
           </CardText>
           <CardText className={textStyle}>
               <br/> 
               Основные варианты применения заземляющих устройств приведе-ны на рис. <Majax.Node inline formula="5.3-5.5."/>
               Устройства по рис. <Majax.Node inline formula="5.3"/> и <Majax.Node inline formula="5.4"/> выполняются как контурные, так и выносные, по рис. 
               <Majax.Node inline formula="5.5"/> выполняют как выносное заземление
           </CardText>
           <CardText>
               <br/>
               Защита объектов связи от прямых грозовых разрядов достигает-ся в большинстве случаев с помощью молниеприемников 
               (например,штырь длиной <Majax.Node inline formula="1.6 м"/> и сечением <Majax.Node inline formula="100 кв. мм"/>), 
               соединенных с отдельнымзащитным заземлением. Ток молнии содержит значительную высоко-частотную составляющую (с частотой более <Majax.Node inline formula="100 кГц"/>), 
               поэтому сопро-тивление заземления включает заметную индуктивную составляющую проводника, соединяющей молниеприемник с устройством заземления. 
               Такое сопротивление называют импульсным и, в зависимости откате-гории молние-защиты <Majax.Node inline formula="(I, II, III)"/> его величина устанавливается в преде-лах 
               от <Majax.Node inline formula="10"/> до <Majax.Node inline formula="40 Ом"/>. Для защиты от наведенных зарядов используется защитное 
               заземление <Majax.Node inline formula="(рис.5.3)"/>, причем <Majax.Node inline formula="R_{з}≤10 Ом"/>,
           </CardText>
           <CardText className={textStyle}>
               <br/>
               При питании электроустановок <Majax.Node inline formula="(Э/У1,Э/У2)"/> от сети с изолирован-ной нейтралью (система <Majax.Node inline formula="IT"/> ) и линейным 
               напряжением <Majax.Node inline formula="Uл"/> <Majax.Node inline formula="1000"/> В норма сопротивления заземления Rз <Majax.Node inline formula="4Ом"/> при габаритной 
               мощности <Majax.Node inline formula="P_{Т}"/> трансформатора <Majax.Node inline formula="Т"/>, превышающей <Majax.Node inline formula="P_{Т} 100 кВА"/>, 
               если <Majax.Node inline formula="P_{Т} 100 кВА"/>, то <Majax.Node inline formula="R_{з} 10Ом"/>. Если <Majax.Node inline formula="U_{л} 1000В"/>, 
               то <Majax.Node inline formula="\frac{R+{з}≤ 250 }{I_{3} ≥ 0.5} "/>, Ом здесь <Majax.Node inline formula="I_{3}"/> – расчетный ток <Majax.Node inline formula="(А)"/> замыкания фазы на землю.
           </CardText>
           <CardText>
                <br/>
                В сетях с заземленной нейтралью (системы  <Majax.Node inline formula="TN-C"/> или  <Majax.Node inline formula="TN-S"/> ) при <Majax.Node inline formula="Uл 1000 В"/> ( <Majax.Node inline formula="рис.5.4"/>), 
                для защиты электроустановок от короткого за-мыкания в питающих цепях и замыкания фазного провода на корпус электро установки следует обязательно применять систему зануления,
                нулевой рабочий ( <Majax.Node inline formula="ОР"/> или <Majax.Node inline formula="N"/>) проводник может быть использован икакнулевой защитный 
                (<Majax.Node inline formula="03"/> или <Majax.Node inline formula="PE+N=PEN"/>) проводник. Сопротивление заземляющего устройства, к которому присоединены нейтралигенера-торов 
                или выводы источников однофазного тока, в любое время года <Majax.Node inline formula="39 "/> должно быть не более <Majax.Node inline formula="2, 4, 8 Ом"/> соответственно 
                при <Majax.Node inline formula="U_{л}=660,380,220В"/>. Это сопротивление должно быть обеспечено с учетом использо-вания естественных заземлителей, а также 
                заземлителей повторных(<Majax.Node inline formula="R_{n}"/>) заземлений. При этом <Majax.Node inline formula="R_{0} 15,30,60 Ом"/> соответственно 
                при <Majax.Node inline formula="U_{л}=660,380,220В"/>.
           </CardText>
           <CardText className="text-center">
                <br/><img alt="img1" src={img1} /><br/>
                Рис.<Majax.Node inline formula ="5.3."/> Заземление электроустановок в сетях с изолированной нейтралью(<Majax.Node inline formula="IT"/>)
           </CardText>
           <CardText className={textStyle}>
                <br/>
                Общее сопротивление растеканию тока заземлителей (в том числеестественных) всех повторных заземлений нулевого проводадолжнобыть не более <Majax.Node inline formula="5,10,20 Ом"/> 
                соответственно при <Majax.Node inline formula="U_{л}=660,380,220В"/>. При этом <Majax.Node inline formula="R"/> подного повторного заземления должно быть не более <Majax.Node inline formula="15, 30, 60 Ом"/> 
                соответственно при указанных выше значениях <Majax.Node  inline formula="Uл"/>. Приудельном сопротивлении земли <Majax.Node inline formula="p > 100О м·м"/> допускается увеличитьуказанные нормы в 
                <Majax.Node inline formula="\frac{p}{100} ≤ 10"/>. раз Величину сопротивления <Majax.Node inline formula="Rр"/> рабочего заземления обычно устанав-ливают 
                в пределах <Majax.Node inline formula="Rр ≤ 0.05 Rэу"/>. Естественными заземлителями обычно являются размещенные вземле железобетонные конструкции фундамента здания.
                Сопротивление току растекания железобетонных конструкций, расположенных в земле, определяется с учетом повышенного сопро-тивления бетонного слоя и его промерзания (или высыхания).
                Та-кой учет достигается увеличением в <Majax.Node inline formula="1.8"/> раза удельного сопротивления грунта, в котором расположен естественный заземлитель. 
                Сопротивление заземления <Majax.Node inline formula="R′В"/>, вертикального электрода
           </CardText>
           <CardText className="text-center">
               <br/><img alt="img2" src={img2} /><br/>
               Рис.<Majax.Node inline formula ="5.4."/> Применение заземляющих устройств в сетях с заземленной ней-тралью (<Majax.Node inline formula="TN-S"/>)
           </CardText>
           <CardText className="text-center">
               <Majax.Node inline formula="R'_{B}=\frac{0.9ρ_{B}}{πl}ln(\frac{4l}{d})Ψ_{1}"/>
           </CardText>
           <CardText className={textStyle}>
               <br/>
               здесь <Majax.Node inline formula="ρВ"/>–удельное сопротивление земли для вертикального электро-да, 
               <Majax.Node inline formula="l,d"/>–длина и диаметр электрода,
               <Majax.Node inline formula="Ψ1"/>– коэффициент сезонностидля вертикального электрода.
               Сопротивление <Majax.Node inline formula="RГ"/> заземления горизонтального электрода (есте-ственного), 
               периметр которого равен  <Majax.Node inline formula="p"/>:
           </CardText>
           <CardText className="text-center">
               <Majax.Node inline formula="R'_{г}=\frac{0.9π}{ρ}ρ_{г}Ψ_{2}"/>
           </CardText>
           <CardText>
               <br/>
               здесь
               <Majax.Node inline formula="ρГ"/>– удельное сопротивление земли для горизонтального элек-трода,
               <Majax.Node inline formula="Ψ_{2}"/>– коэффициент сезонности для горизонтального электрода.
               Искусственный вертикальный заземлитель имеет сопротивление
           </CardText>
           <CardText className="text-center">
               <Majax.Node inline formula="R'_{B}=\frac{ρ_{B}}{2πl}(ln\frac{2L}{d}+\frac{1}{2}ln\frac{4t+L}{4t-l})Ψ_{1}"/>
           </CardText>
           <CardText>
                <br/>
                здесь <Majax.Node inline formula="t=F+L/2"/>, 
                <Majax.Node inline formula="L"/>–длина заземлителя,
                <Majax.Node inline formula="F"/>–глубина размещенияверхнего комля заземлителя. Сопротивление
                <Majax.Node inline formula="RГ"/> растеканию тока в земле одиночного горизон-тального электрода длиной 
                <Majax.Node inline formula="L1"/> и эквивалентным диаметром <Majax.Node inline formula="d1"/>:
           </CardText>
           <CardText className="text-center">
               <br/><img alt="img3" src={img3} /><br/>
               Рис.<Majax.Node inline formula ="5.5."/> Применение рабочего заземления <Majax.Node inline formula="R_{р}"/> для питания <Majax.Node inline formula="R_{эу}"/> 
               от источ-ника тока <Majax.Node inline formula="E"/>.
           </CardText>
           <CardText className="text-center">
               <Majax.Node inline formula="R'_{B}=\frac{ρ_{B}}{2πL}ln\frac{L^{2}_{1}}{d_{1}F}Ψ_{2}"/>
           </CardText>
           <CardText className={textStyle}>
               Для определения сопротивления <Majax.Node inline formula="R_{З}"/>системы из <Majax.Node inline formula="N"/> вертикальных и <Majax.Node inline formula="N−1"/> горизонтальных электродов используют соотношение:
           </CardText>
           <CardText className="text-center">
               <Majax.Node inline formula="R_{З}=\frac{R_{В}R_{Г}}{R_{В}η_{Г}+R_{Г}η_{В}N}"/>
           </CardText>
           <CardText className={textStyle}>
              здесь <Majax.Node inline formula="ηВ, ηГ"/> – коэффициенты использования соответственно горизон-тального и вертикального электродов.
              Величины коэффициентов использования в справочнике <Majax.Node inline formula="[1]"/> даютсяв табличном виде с допущением линейной интерполяции для промежу-точных значений
              <Majax.Node inline formula="L,L_{1},N"/>. При разработке файла, обеспечивающегоисследование заземляющего устройства, 
              предпочтительнее аналитиче-ский эквивалент для <Majax.Node inline formula="ηВ, ηГ"/>(при размещении заземлителей по контуру)
           </CardText>
           <CardText className="text-center">
               <Majax.Node inline formula="η=a*exp(−k(N−4)^{0.56})+b"/>
           </CardText>
           <CardText className={textStyle}>
                здесь <Majax.Node inline formula="a, b, k=a_{1}+a_{2}x+a_{3}x_{2}"/>
           </CardText>
           <CardText className="text-center">
               <Majax.Node inline formula="X=\frac{L_{1}}{L}-1"/>
           </CardText>
           <CardText className={textStyle}>
                Значения <Majax.Node inline formula="a_{1}, a_{2}, a_{3}"/> представлены в таблице <Majax.Node inline formula="5.1"/>
           </CardText>
           <CardText className="text-center">
               <br/><img alt="img4" src={img4}/><br/>
               Taблица <Majax.Node inline formula ="5.1."/> Аппроксимирующие коэффициенты
               от источ-ника тока <Majax.Node inline formula="E"/>.
           </CardText>
           <CardText className={textStyle}>
               Коррозия металла заземлителя зависит от тока, проходящегоче-рез электроды. 
               Сечение металла искусственных заземлителей, требу-ющееся для обеспечения нормативного срока службы <Majax.Node inline formula="T_{c}"/> заземления,оцениваете соотношением:
           </CardText>
           <CardText className="text-center">
               <Majax.Node inline formula="S=\frac{13.5IR_{B}}{LN(RВ+RГ)}"/>,   <Majax.Node inline formula="S_{1}=\frac{13.5IR_{Г}}{L_{1}(N-1)(R_{В}+R_{Г})}"/>
           </CardText>
           <CardText className={textStyle}>
               здесь <Majax.Node inline formula="I"/> – среднее за время <Majax.Node inline formula="T_{c}"/> 
               значение амплитуды тока (<Majax.Node inline formula="А"/>) заземления,
               <Majax.Node inline formula="Tc=15"/>лет; 
               <Majax.Node inline formula="S,S_{1}"/> – сечение металла соответственно вертикального игоризонтальной электродов, <Majax.Node inline formula="см^2"/>.
           </CardText>
          </Col>
        </Row>
     </Majax.Provider>
    );
}

export default Theory;