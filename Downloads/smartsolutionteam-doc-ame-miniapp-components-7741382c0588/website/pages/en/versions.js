/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary')

const Container = CompLibrary.Container

const CWD = process.cwd()

const versions = require(`${CWD}/versions.json`)

function Versions(props) {
  const { config: siteConfig } = props
  const latestVersion = versions[0]
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title}</h1>
          </header>
          <p>Histórico de versões.</p>
          <h3 id="latest">Versão corrente (Estável)</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:id" */}
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/introducao`}
                  >
                    Documentação
                  </a>
                </td>
                <td>
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                      props.language ? props.language + '/' : ''
                    }release-notes`}
                  >
                    Notas da versão
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 id="archive">Versões Antigas</h3>
          <p>Veja abaixo a documentação de versões mais antigas.</p>
          <table className="versions">
            <tbody>
              {versions.map(
                (version) =>
                  version !== latestVersion && (
                    <tr key={version}>
                      <th>{version}</th>
                      <td>
                        {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:version/:id" */}
                        <a
                          href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${version}/introducao/`}
                        >
                          Documentação
                        </a>
                      </td>
                      <td>
                        <a
                          href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                            props.language ? props.language + '/' : ''
                          }${version}/release-notes`}
                        >
                          Notas da versão
                        </a>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}

module.exports = Versions
