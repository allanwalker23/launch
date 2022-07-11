/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')
const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class MiniAppDev extends React.Component {

    render() {

        const parallaxBlock = {
            fontSize: "20px",
            height: "620px",
            backgroundImage: `url('https://i.pinimg.com/originals/d6/fe/02/d6fe02e444535d80df375d8f53dd3fd6.png')`,
            // backgroundImage: `url('https://ethostec.net/img/full/ringcentral-main-banner.jpg')`,
            opacity: "1",
            backgroundColor: "#993399",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "80% 30px",
            backgroundSize: "100% 100%",
            color: "#ffffff"
        }

        const ParallaxBlockBanner = props => (
            <div style={parallaxBlock}>
                <Container
                    padding={['bottom', 'top']}
                    id={props.id}
                    background={props.background}
                    backgroundImage={props.backgroundImage}>
                    <GridBlock
                        align="justify"
                        contents={props.children}
                        layout={props.layout}
                    />

                </Container>
            </div >
        )

        const BlockParallax = () => (
            <ParallaxBlockBanner>
                {[
                    {
                        content: '***Híbridos*** (via PhoneGap, Titanium), ***Frameworks***' +
                            '(React Native, Flutter, Corona SDK, Unity, Titanium) e ***Nativos*** (via Objetive C e Java Android)' +
                            'Atualmente temos optado pelo uso dos frameworks que poupam bastante trabalho, seja codificação ou testes.' +
                            '<br>' +
                            '<br>' +
                            'Com eles é possível fazer um único código para os dois principais sistemas operacionais do mercado(iOS e Android)' +
                            'e ter a performance nativa", explica.',

                        // image: `https://i.ya-webdesign.com/images/leader-vector-flat-design-6.png`,
                        image: 'https://image.flaticon.com/icons/png/512/1058/1058405.png',

                        imageAlign: 'right',
                        title: '<h1>Maneiras de se desenvolver um app</h1>',

                    },
                ]}
            </ParallaxBlockBanner>
        )


        const bigBannerStyle = {
            fontSize: "70px",
            lineHeight: "80px",
            height: "540px",
            // backgroundImage: `url('https://i.ytimg.com/vi/NdE5zoWKAjM/maxresdefault.jpg')`,
            // backgroundImage: `url('https://www.nexmobility.com/images/pagebanner/xamrin-app-development_bg.jpg')`,
            backgroundImage: `url('https://www.bacancytechnology.com/blog/wp-content/uploads/2019/06/salesforce-lightening-banner.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "80% -180px",
            backgroundSize: "100% 100%",
            color: "#ffffff"
        }

        const BannerBlock = props => (
            <div style={bigBannerStyle}>
                <Container
                    padding={['bottom', 'top']}
                    id={props.id} >
                    <GridBlock
                        align="left"
                        contents={props.children}
                        layout={props.layout}
                    />
                </Container>
            </div >
        )


        const Banner = () => (
            <BannerBlock>
                {[
                    {
                        content: '<div style={styles}>Conhecendo o universo de desenvolvimento de Mini-Apps.</div><h2> Descubra a tecnologia aplicada no ecossistema. Conceitos de SuperApp e Mini-App.</h2>',
                        //   '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        image: `https://dev.w3.org/2007/mobileok-ref/test/data/ROOT/GraphicsForSpacingTest/1/largeTransparent.gif`,

                        imageAlign: 'right',

                    },
                ]}
            </BannerBlock>
        )
        const BlockDescriptionStyle = {
            fontSize: 20
        }
        const BlockDescription = props => (
            <div style={BlockDescriptionStyle}>
                <Container
                    padding={['bottom', 'top']}
                    id={props.id}
                    background={props.background}
                    backgroundImage={props.backgroundImage}>
                    <GridBlock
                        align="left"
                        contents={props.children}
                        layout={props.layout}
                    />
                    {/* <bigText style={bigTextStyle}>dddddd</bigText> */}
                </Container>
            </div>
        )

        const Description = () => (
            <BlockDescription background="light">
                {[
                    {
                        content:
                            'Antes de iniciar o desenvolvimento de ' +
                            'um aplicativo é preciso levar em conta fatores importantes.' +
                            '"Público-alvo, jornada (casa, trabalho, cama, etc.), time saver ou' +
                            'time killer(otimizar o tempo ou matar o tempo) e retenção seriam os' +
                            'pilares da criação.Contudo, ainda existem as ferramentas de interação -' +
                            'KPIs - que são igualmente importantes.Se tivesse de fazer um resumo seria:' +
                            'easy, fast e fun (fácil, rápido e divertido)”.' + '<br>' +

                            '<br>' +
                            'Com a expansão do mercado mobile, boas oportunidades de crescimento e reconhecimento surgiram para empresas e negócios locais.Com ele, também abriram- se oportunidades para profissionaisliberais como designers, chefs e músicos que também podem construir sua própria rede de contatos, mostrar os seus trabalhos e abrir um canal de comunicação com seus respectivos usuários e clientes.',
                        // image: `https://www.amedigital.com/wp-content/uploads/2019/11/imagem-vender-com-ame-2.png`,
                        image: `https://hum-systems.com/site/templates/images/jobs/hardware-developer.png`,
                        // image: `${baseUrl}img/undraw_note_list.svg`,
                        imageAlign: 'right',
                        title: '<h1>Ponto de partida</h1>',
                    },
                ]}
            </BlockDescription>
        )

        const RightTextBlockstyle = {
            backgroundColor: "#ededed",
            color: "#000",
            textAlign: "justify",
            fontSize: 20
        }

        const RightTextBlock = props => (
            <div style={RightTextBlockstyle}>
                <Container
                    padding={['bottom', 'top']}
                    id={props.id}
                    background={props.background}
                    backgroundImage={props.backgroundImage}>
                    <GridBlock
                        align="left"
                        contents={props.children}
                        layout={props.layout}
                    />

                </Container>
            </div >
        )


        const BlockTextRight = () => (
            <RightTextBlock className="productShowcaseSection paddingBottom">
                {[
                    {
                        content: 'Ter um app exclusivo não é algo tão distante quanto parece. Atualmente existem inúmeras' +
                            'ferramentas online "do it yourself"(DIY, ou "faça você mesmo) com passo a passo ilustrado e didático' +
                            'que pode facilitar o desenvolvimento de um app para uma empresa ou instituição.' + '<br>' +
                            'O conhecimento avançado em informática e programação ainda é imprescindível em alguns' +
                            'aspectos, mas em outros casos essas ferramentas predefinidas são suficientes para a criação de' +
                            'alguns aplicativos voltados para negócios ou fortalecimento de uma marca.' +
                            '<br>' +
                            '<br>' +
                            'Na programação, os aplicativos podem ser classificados em três grupos: aplicativos nativos e híbridos,' +
                            'que são instalados no dispositivo por meio de uma loja como a Apple Store ou Google Play; web apps,' +
                            'que são páginas web otimizadas para dispositivos móveis e parecem um aplicativo; e os web apps que' +
                            'usam páginas HTML5 e navegadores incorporados para rodá- los.',
                        // '<br>' +
                        // '<br>' +
                        // 'Hoje existem três maneiras de se desenvolver um app. ***Híbridos*** (via PhoneGap, Titanium), Frameworks' +
                        // '(via Corona SDK, Unity, Titanium) e Nativos (via Objetive C e Java Android). "O que temos mais' +
                        // 'simpatizado atualmente é o uso dos frameworks que poupam bastante trabalho, seja codificação ou testes.' +
                        // '<br>' +
                        // '<br>' +
                        // 'Com eles é possível fazer um único código para os dois principais sistemas operacionais do mercado (iOS e Android)' +
                        // 'e ter a performance nativa", explica.',

                        // 'https://canaltech.com.br/mercado/Conhecendo-o-universo-de-desenvolvimento-de-apps-para-smartphones/',

                        image: 'https://www.karinegallo.com.br/wp-content/uploads/2018/07/duvidassss.png',
                        imageAlign: 'left',
                        title: ' Desenvolvendo um Mini-App',

                    },
                ]}
            </RightTextBlock>
        )


        const FeatureCallout = () => (
            <div
                className="productShowcaseSection paddingBottom"
                style={{ textAlign: 'justify' }}>
                <h2>Ponto de Partida</h2>
                <span>Antes de iniciar o desenvolvimento de um aplicativo é preciso levar em conta fatores importantes.
                    "Público-alvo, jornada (casa, trabalho, cama, etc.), time saver ou
                    time killer (otimizar o tempo ou matar o tempo) e retenção seriam os
                    pilares da criação. Contudo, ainda existem as ferramentas de interação -
                    KPIs - que são igualmente importantes. Se tivesse de fazer um resumo seria:
                    easy, fast e fun (fácil, rápido e divertido)”, explica João Paulo Gino, Diretor
                    da CodeZone, empresa especializada em soluções web, mobile, e-commerce e multimídia.
        </span>
            </div>
        )




        const { config: siteConfig } = this.props
        if ((siteConfig.miniAppDev || []).length === 0) {
            return null
        }

        const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`
        const showcase = siteConfig.miniAppDev.map(miniAppDevs => (
            <a href={miniAppDevs.infoLink} key={miniAppDevs.infoLink}>
                <img src={miniAppDevs.image} alt={miniAppDevs.caption} title={miniAppDevs.caption} />
            </a>
        ))

        return (
            // <div className="mainContainer">
            //     <Container padding={['bottom', 'top']}>
            //         <div className="showcaseSection">
            //             <div className="prose">
            //                 <h1>--------------------------Who is Using This?</h1>
            //                 <p>This project is used by many folks</p>
            //             </div>
            //             <div className="logos">{showcase}</div>
            //             <p>Are you using this project?</p>
            //             <a href={editUrl} className="button">
            //                 Add your company
            // </a>
            //         </div>
            //     </Container>
            // </div>

            <div
            // className="mainContainer"
            >
                <Banner />
                <div className="mainContainer">
                    {/* <FeatureCallout /> */}
                    <Description />
                    <BlockTextRight />
                    <BlockParallax />
                </div>
            </div>
        )
    }
}

module.exports = MiniAppDev
