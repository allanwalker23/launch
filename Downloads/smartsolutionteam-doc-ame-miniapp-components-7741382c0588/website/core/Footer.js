/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    const docsUrl = this.props.config.docsUrl
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    return `${baseUrl}${docsPart}${langPart}${doc}`
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? `${language}/` : '') + doc
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href="https://developer.ame.calindra.com.br/docs/definition/">
              Conceitos
            </a>
            <a href="https://ame-miniapp-components.calindra.com.br/docs/introducao/">
              Mini-App Components
            </a>
            <a href="https://super-app-client.calindra.com.br/docs/ame-super-app-client/">
              Super-App Client
            </a>
            <a href="https://ame-app-tools.calindra.com.br/docs/cli/">
              Ame App Tools
            </a>
            <a href="https://serverless.calindra.com.br/docs/backend-definition/">
              Serverless Backend
            </a>
            <a href="https://persistere.calindra.com.br/docs/persistere-lib/">
              Persistere
            </a>
            <a href="https://www.calindra.tech" target="_blank">
              Made with love by Calindra
            </a>
          </div>
          <div>
            <h5>Comunidade</h5>
            <a
              href="https://pt-br.facebook.com/useamedigital/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/useamedigital/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCzEIIlOJOJLWJCTXxZQuNaw"
              target="_blank"
              rel="noreferrer noopener"
            >
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/company/ame-digital"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <h5>Mais</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a target={'_blank'} href="https://www.amedigital.com/">
              Ame Digital
            </a>
            <a target={'_blank'} href="https://www.amedigital.com/duvidas/">
              Dúvidas
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
        <script
          data-jsd-embedded
          data-key="33ad897e-3409-4976-be96-18add0288faf"
          data-base-url="https://jsd-widget.atlassian.com"
          src="https://jsd-widget.atlassian.com/assets/embed.js"
        ></script>
      </footer>
    )
  }
}

module.exports = Footer
