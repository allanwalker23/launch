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

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    )

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {/* {props.title} */}
        {props.anotherTitle}
        <small>{props.tagline}</small>
      </h2>
    )

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline}
            // title={siteConfig.title}
            anotherTitle={siteConfig.anotherTitle}
          />
          <PromoSection>
            <Button href="#try">Botão 1</Button>
            <Button backgroundColor={"red"} href={docUrl('doc1.html')}>Botão 2</Button>
            <Button href={docUrl('doc2.html')}>Botão 3</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
        backgroundImage={props.backgroundImage}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    )


    const LeftTextBlockstyle = {
      // backgroundColor: "#ff0000",
      color: "#000",
      textAlign: "left"
    }

    const LeftTextBlock = props => (
      <div style={LeftTextBlockstyle}>
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


    // const gradientColor = {
    //   fontSize: "3.5vw",
    //   backgroundImage: "linear-gradient(-60deg, #FF2D55, #ED0059, #170085)",
    //   color: "#ffffff",
    //   fontWeight: 400,
    //   wordWrap: "break-word",
    // }

    const styles = {
      gradientColor: {
        height: 670,
        lineHeight: "97%",
        fontSize: "8vw",
        fontFamily: "Ubuntu, ubuntu, Helvetica, sans-serif",
        backgroundImage: "linear-gradient(-60deg, #FF2D55, #ED0059, #170085)",
        color: "#ffffff",
        fontWeight: "bold",
      },

      titulo: {
        lineHeight: "12px",
        color: 'green',
        fontSize: "1.5vw",
        backgroundColor: "#170085",
      },

    }

    const BannerColor = props => (
      <div style={styles.gradientColor}>
        <Container
          padding={['bottom', 'top']}
          id={props.id} >

          <GridBlock
            align="left"
            contents={props.children}
            layout={props.layout}
            title={props.title}
          />

        </Container>

      </div >
    )

    const BannerDescription = () => (
      <BannerColor >
        {[
          {
            content: '<div style={styles}>Crie um mini-app!</div><h2> Este portal contém todas as informações necessárias para criar mini-apps. <br> Entenda essa nova maneira de desenvolver soluções para pagamentos digitais</h2>',
            // image: `https://www.amedigital.com/wp-content/uploads/2019/11/imagem-vender-com-ame-2.png`,
            image: 'https://www.egrovesys.com/wp-content/uploads/2019/07/mobile-app-development-img.png',
            imageAlign: 'right',
          },
        ]
        }
      </BannerColor >
    )

    const bigBannerStyle = {
      fontSize: "80px",
      height: "720px",
      backgroundImage: `url('https://i.ytimg.com/vi/NdE5zoWKAjM/maxresdefault.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "60% 20%",
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
            // content:
            //   '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            // image: `https://www.amedigital.com/wp-content/uploads/2019/11/imagem-vender-com-ame-2.png`,

            imageAlign: 'left',
            // title: '<h1>Ame digital</h1>',
          },
        ]}
      </BannerBlock>
    )


    const BlockDescription = props => (
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
    )

    const Description = () => (
      <BlockDescription background="highlight">
        {/* <BlockDescription backgroundImage="linear-gradient(-60deg, #FF2D55, #ED0059, #170085)"> */}
        {[
          {
            content:
              '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: `https://www.amedigital.com/wp-content/uploads/2019/11/imagem-vender-com-ame-2.png`,
            // image: `https://iottechsoft.com/assets/images/iot/android.png`,
            // image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: '<h1>Ame digital</h1>',
          },
        ]}
      </BlockDescription>
    )

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Conecte-se</h2>
        <MarkdownBlock>Seja parte do time e comande essa revolução.
          Pintou dúvida? Veja nossa central rápida de ajuda
        </MarkdownBlock>
      </div>
    )

    const TryOut = () => (
      <LeftTextBlock background="dark" id="try">
        {[
          {
            content: 'Com a expansão do mercado mobile, boas oportunidades de crescimento e reconhecimento surgem para empresas e' +
              ' negócios locais. Com ele, também abrem-se oportunidades para profissionais como designers, programadores, líderes e gestores.' +
              'Crie sua própria rede de contatos, mostre os seus trabalhos e abra um canal de comunicação com seus respectivos usuários e clientes.',
            image: 'https://www.amedigital.com/wp-content/uploads/2019/11/tela-inicial-app-aplicado-copy.png',
            imageAlign: 'left',
            title: 'Conhecendo o universo de desenvolvimento de Mini-Apps!'
          },
        ]}
      </LeftTextBlock>
    )



    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    )

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Ambiente completo e documentado para transformar seus negócios em uma nova forma de pagamento para seu cliente.',
            image: `${baseUrl}img/icone-explore.svg`,
            imageAlign: 'top',
            title: 'Explore',
          },
          {
            content: 'Documentação necessária para desenvolver seu miniaplicativo. Desde a configuração até a execução em um ambiente de teste.',
            image: `${baseUrl}img/icone-desenvolva.svg`,
            imageAlign: 'top',
            title: 'Desenvolva',
          },
          {
            content: 'Guia de estilos para criação de impressionantes interfaces de mini-app.',
            image: `${baseUrl}img/icone-desenhe.svg`,
            imageAlign: 'top',
            title: 'Desenhe',
          },
          {
            content: 'Transforme seu mini-app em realidade, distribuindo-o para milhões de pessoas',
            image: `${baseUrl}img/icone-distribua.svg`,
            imageAlign: 'top',
            title: 'Distribua',
          }
        ]}
      </Block>
    )

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ))

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Alguma dúvida?</h2>
          <p> Alguns tripulantes estão se deparando com algo novo, um mundo novo ou o primeiro contato com uma linguagem. Ter dúvidas é absolutamente normal e faz parte do processo de desenvolvimento. Veja nossa Central de Ajuda!</p>
          {/* <div className="logos">{showcase}</div> */}
          <div><img src="https://image.flaticon.com/icons/png/512/682/682037.png" /></div>
          <br></br>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              Faq
              {/* {siteConfig.title} */}
            </a>
          </div>
        </div>
      )
    }




    return (
      <div>
        <BannerDescription />
        <div className="mainContainer">
          <Features />
          <TryOut />
        </div>
      </div>
    )
  }
}

module.exports = Index
