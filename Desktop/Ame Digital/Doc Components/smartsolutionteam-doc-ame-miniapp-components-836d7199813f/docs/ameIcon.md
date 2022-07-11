---
id: ameicon
title: AmeIcon
sidebar_label: 5.4 AmeIcon
---

**_Deprecated_** Esse componente será descontinuado, por favor use o componente [Image](image.md) no lugar

Componente que exibe um Ícone.

## Exemplo

![ameicon](assets/images_components/v2.0.0/ameicon.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/ilustra%C3%A7%C3%B5es-ameicon--icon)

<br>

## Utilização

```xml
<AmeIcon icon={'ame-outline'}/>
<AmeIcon icon={require(path_icon)}/>
```

## Propriedades

### onClick

- Type: Function
- Opcional

Função ao ser executada quando tocar no icone.

### path

- Type: String
- Opcional

**_Deprecated_**

Path do icone a ser renderizado.

### color

- Type: String
- Opcional

Nessa propriedade pode ser passada a string 'black' ou 'red' para trocar a cor do ícone. Por default a propriedade está como 'black'

### icon

- Type: String
- Obrigatório

Nome do ícone a ser renderizado ou um arquivo svg ou png.

Segue abaixo a lista de ícones:

- ![accounts-outline](assets/icones/accounts-outline.png) accounts-outline
- ![accounts-solid](assets/icones/accounts-solid.png) accounts-solid
- ![adress-outline](assets/icones/adress-outline.png) adress-outline
- ![adress-solid](assets/icones/adress-solid.png) adress-solid
- ![agenda-outline](assets/icones/agenda-outline.png) agenda-outline
- ![agenda-solid](assets/icones/agenda-solid.png) agenda-solid
- ![alert-outline](assets/icones/alert-outline.png) alert-outline
- ![alert-solid](assets/icones/alert-solid.png) alert-solid
- ![ame-banking](assets/icones/ame-banking.png) ame-banking
- ![ame-outline](assets/icones/ame-outline.png) ame-outline
- ![ame-solid](assets/icones/ame-solid.png) ame-solid
- ![attach](assets/icones/attach.png) attach
- ![bank-outline](assets/icones/bank-outline.png) bank-outline
- ![bank-solid](assets/icones/bank-solid.png) bank-solid
- ![bar-code](assets/icones/bar-code.png) bar-code
- ![barbecue-outline](assets/icones/barbecue-outline.png) barbecue-outline
- ![barbecue-solid](assets/icones/barbecue-solid.png) barbecue-solid
- ![bell-notification-outline](assets/icones/bell-notification-outline.png) bell-notification-outline
- ![bell-notification-solid](assets/icones/bell-notification-solid.png) bell-notification-solid
- ![bestcb](assets/icones/bestcb.png) bestcb
- ![best-deals-outline](assets/icones/best-deals-outline.png) best-deals-outline
- ![bikeitau](assets/icones/bikeitau.png) bikeitau
- ![bus-outline](assets/icones/bus-outline.png) bus-outline
- ![bus-solid](assets/icones/bus-solid.png) bus-solid
- ![cabify](assets/icones/cabify.png) cabify
- ![caixa](assets/icones/caixa.png) caixa
- ![calendar-outline](assets/icones/calendar-outline.png) calendar-outline
- ![calendar-solid](assets/icones/calendar-solid.png) calendar-solid
- ![camera-outline](assets/icones/camera-outline.png) camera-outline
- ![camera-solid](assets/icones/camera-solid.png) camera-solid
- ![card-ame-outline](assets/icones/card-ame-outline.png) card-ame-outline
- ![card-ame-solid](assets/icones/card-ame-solid.png) card-ame-solid
- ![carimbo](assets/icones/carimbo.png) carimbo
- ![cart-outline](assets/icones/cart-outline.png) cart-outline
- ![cart-solid](assets/icones/cart-solid.png) cart-solid
- ![cashback](assets/icones/cashback.png) cashback
- ![cat](assets/icones/cat.png) cat
- ![chat-mail-outline](assets/icones/chat-mail-outline.png) chat-mail-outline
- ![chat-mail-solid](assets/icones/chat-mail-solid.png) chat-mail-solid
- ![chat-message-outline](assets/icones/chat-message-outline.png) chat-message-outline
- ![chat-message-solid](assets/icones/chat-message-solid.png) chat-message-solid
- ![chat-sms-outline](assets/icones/chat-sms-outline.png) chat-sms-outline
- ![chat-sms-solid](assets/icones/chat-sms-solid.png) chat-sms-solid
- ![chat-whatsapp-outline](assets/icones/chat-whatsapp-outline.png) chat-whatsapp-outline
- ![chat-whatsapp-solid](assets/icones/chat-whatsapp-solid.png) chat-whatsapp-solid
- ![cinema-outline](assets/icones/cinema-outline.png) cinema-outline
- ![cinema-solid](assets/icones/cinema-solid.png) cinema-solid
- ![clock-outline](assets/icones/clock-outline.png) clock-outline
- ![clock-solid](assets/icones/clock-solid.png) clock-solid
- ![close](assets/icones/close.png) close
- ![clothing-tshirt-outline](assets/icones/clothing-tshirt-outline.png) clothing-tshirt-outline
- ![clothing-tshirt-solid](assets/icones/clothing-tshirt-solid.png) clothing-tshirt-solid
- ![colapse](assets/icones/colapse.png) colapse
- ![configuration-outline](assets/icones/configuration-outline.png) configuration-outline
- ![configuration-solid](assets/icones/configuration-solid.png) configuration-solid
- ![conversion](assets/icones/conversion.png) conversion
- ![copy-outline](assets/icones/copy-outline.png) copy-outline
- ![copy-solid](assets/icones/copy-solid.png) copy-solid
- ![cracha](assets/icones/cracha.png) cracha
- ![credit-card-ame](assets/icones/credit-card-ame.png) credit-card-ame
- ![credit-card-outline](assets/icones/credit-card-outline.png) credit-card-outline
- ![credit-card-solid](assets/icones/credit-card-solid.png) credit-card-solid
- ![cupom-outline](assets/icones/cupom-outline.png) cupom-outline
- ![cupom-solid](assets/icones/cupom-solid.png) cupom-solid
- ![curiosities-outline](assets/icones/curiosities-outline.png) curiosities-outline
- ![curiosities-solid](assets/icones/curiosities-solid.png) curiosities-solid
- ![dashboard-outline](assets/icones/dashboard-outline.png) dashboard-outline
- ![dashboard-solid](assets/icones/dashboard-solid.png) dashboard-solid
- ![delivery-outline](assets/icones/delivery-outline.png) delivery-outline
- ![delivery-solid](assets/icones/delivery-solid.png) delivery-solid
- ![deposit-outline](assets/icones/deposit-outline.png) deposit-outline
- ![deposit-solid](assets/icones/deposit-solid.png) deposit-solid
- ![deslike-no-outline](assets/icones/deslike-no-outline.png) deslike-no-outline
- ![deslike-no-solid](assets/icones/deslike-no-solid.png) deslike-no-solid
- ![details](assets/icones/details.png) details
- ![diarista-outline](assets/icones/diarista-outline.png) diarista-outline
- ![diarista-solid](assets/icones/diarista-solid.png) diarista-solid
- ![divide](assets/icones/divide.png) divide
- ![documents-cpf](assets/icones/documents-cpf.png) documents-cpf
- ![documents-id-outline](assets/icones/documents-id-outline.png) documents-id-outline
- ![documents-id-solid](assets/icones/documents-id-solid.png) documents-id-solid
- ![donation-art](assets/icones/donation-art.png) donation-art
- ![donation-autonomous](assets/icones/donation-autonomous.png) donation-autonomous
- ![donation-communities](assets/icones/donation-communities.png) donation-communities
- ![donation-coronavirus](assets/icones/donation-coronavirus.png) donation-coronavirus
- ![donation-environement](assets/icones/donation-environement.png) donation-environement
- ![donation-fomezero](assets/icones/donation-fomezero.png) donation-fomezero
- ![donation-girlpower](assets/icones/donation-girlpower.png) donation-girlpower
- ![donation-healthcare](assets/icones/donation-healthcare.png) donation-healthcare
- ![donation-kids](assets/icones/donation-kids.png) donation-kids
- ![donation-planet](assets/icones/donation-planet.png) donation-planet
- ![donation-rainbow](assets/icones/donation-rainbow.png) donation-rainbow
- ![donation-sambarj](assets/icones/donation-sambarj.png) donation-sambarj
- ![donation-sambasalvador](assets/icones/donation-sambasalvador.png) donation-sambasalvador
- ![donation-sambasp](assets/icones/donation-sambasp.png) donation-sambasp
- ![donation-seniors](assets/icones/donation-seniors.png) donation-seniors
- ![donations-education](assets/icones/donations-education.png) donations-education
- ![donations](assets/icones/donations.png) donations
- ![down](assets/icones/down.png) down
- ![drconsulta](assets/icones/drconsulta.png) drconsulta
- ![edit-outline](assets/icones/edit-outline.png) edit-outline
- ![edit-solid](assets/icones/edit-solid.png) edit-solid
- ![electrician](assets/icones/electrician.png) electrician
- ![emprestimo-loan-outline](assets/icones/emprestimo-loan-outline.png) emprestimo-loan-outline
- ![emprestimo-loan-solid](assets/icones/emprestimo-loan-solid.png) emprestimo-loan-solid
- ![emprestimopj-loan](assets/icones/emprestimopj-loan.png) emprestimopj-loan
- ![ensure](assets/icones/ensure.png) ensure
- ![equal](assets/icones/equal.png) equal
- ![events-outline](assets/icones/events-outline.png) events-outline
- ![events-solid](assets/icones/events-solid.png) events-solid
- ![expand](assets/icones/expand.png) expand
- ![extended-warranty](assets/icones/extended-warranty.png) extended-warranty
- ![extrato-outline](assets/icones/extrato-outline.png) extrato-outline
- ![extrato-solid](assets/icones/extrato-solid.png) extrato-solid
- ![eye-hide](assets/icones/eye-hide.png) eye-hide
- ![eye-show](assets/icones/eye-show.png) eye-show
- ![faces-et-outline](assets/icones/faces-et-outline.png) faces-et-outline
- ![faces-happy-outline](assets/icones/faces-happy-outline.png) faces-happy-outline
- ![faces-happy-solid](assets/icones/faces-happy-solid.png) faces-happy-solid
- ![faces-medium](assets/icones/faces-medium.png) faces-medium
- ![faces-normal-outline](assets/icones/faces-normal-outline.png) faces-normal-outline
- ![faces-normal-solid](assets/icones/faces-normal-solid.png) faces-normal-solid
- ![faces-sad-outline](assets/icones/faces-sad-outline.png) faces-sad-outline
- ![faces-sad-solid](assets/icones/faces-sad-solid.png) faces-sad-solid
- ![faces-veryhappy](assets/icones/faces-veryhappy.png) faces-veryhappy
- ![fav-outline](assets/icones/fav-outline.png) fav-outline
- ![fav-solid](assets/icones/fav-solid.png) fav-solid
- ![feature-bazar-outline](assets/icones/feature-bazar-outline.png) feature-bazar-outline
- ![feature-bazar-solid](assets/icones/feature-bazar-solid.png) feature-bazar-solid
- ![feature-br-petrobras](assets/icones/feature-br-petrobras.png) feature-br-petrobras
- ![feature-news](assets/icones/feature-news.png) feature-news
- ![feature-scanandgo](assets/icones/feature-scanandgo.png) feature-scanandgo
- ![feature-shell-box](assets/icones/feature-shell-box.png) feature-shell-box
- ![feature-taggy](assets/icones/feature-taggy.png) feature-taggy
- ![feature-voucher-future](assets/icones/feature-voucher-future.png) feature-voucher-future
- ![feedback-error](assets/icones/feedback-error.png) feedback-error
- ![feedback-success](assets/icones/feedback-success.png) feedback-success
- ![filter-outline](assets/icones/filter-outline.png) filter-outline
- ![filter-solid](assets/icones/filter-solid.png) filter-solid
- ![fire](assets/icones/fire.png) fire
- ![flash-active](assets/icones/flash-active.png) flash-active
- ![flash-disabled](assets/icones/flash-disabled.png) flash-disabled
- ![food-convenience](assets/icones/food-convenience.png) food-convenience
- ![gamerzone](assets/icones/gamerzone.png) gamerzone
- ![games-outline](assets/icones/games-outline.png) games-outline
- ![games-solid](assets/icones/games-solid.png) games-solid
- ![general-services-outline](assets/icones/general-services-outline.png) general-services-outline
- ![general-services-solid](assets/icones/general-services-solid.png) general-services-solid
- ![ghost](assets/icones/ghost.png) ghost
- ![gift-card-outline](assets/icones/gift-card-outline.png) gift-card-outline
- ![gift-card-solid](assets/icones/gift-card-solid.png) gift-card-solid
- ![gift-outline](assets/icones/gift-outline.png) gift-outline
- ![gift-solid](assets/icones/gift-solid.png) gift-solid
- ![glutenfree](assets/icones/glutenfree.png) glutenfree
- ![gym-outline](assets/icones/gym-outline.png) gym-outline
- ![gym-solid](assets/icones/gym-solid.png) gym-solid
- ![hand-easy](assets/icones/hand-easy.png) hand-easy
- ![hands](assets/icones/hands.png) hands
- ![handshake](assets/icones/handshake.png) handshake
- ![health-outline](assets/icones/health-outline.png) health-outline
- ![health-solid](assets/icones/health-solid.png) health-solid
- ![heart-outline](assets/icones/heart-outline.png) heart-outline
- ![heart-solid](assets/icones/heart-solid.png) heart-solid
- ![help-outline](assets/icones/help-outline.png) help-outline
- ![help-solid](assets/icones/help-solid.png) help-solid
- ![home-outline](assets/icones/home-outline.png) home-outline
- ![home-solid](assets/icones/home-solid.png) home-solid
- ![house-outline](assets/icones/house-outline.png) house-outline
- ![house-solid](assets/icones/house-solid.png) house-solid
- ![image-album-outline](assets/icones/image-album-outline.png) image-album-outline
- ![image-album-solid](assets/icones/image-album-solid.png) image-album-solid
- ![image-outline](assets/icones/image-outline.png) image-outline
- ![image-solid](assets/icones/image-solid.png) image-solid
- ![incoming](assets/icones/incoming.png) incoming
- ![insurances](assets/icones/insurances.png) insurances
- ![investments](assets/icones/investments.png) investments
- ![keyboard-numbers-outline](assets/icones/keyboard-numbers-outline.png) keyboard-numbers-outline
- ![keyboard-numbers-solid](assets/icones/keyboard-numbers-solid.png) keyboard-numbers-solid
- ![lamp-outline](assets/icones/lamp-outline.png) lamp-outline
- ![lamp-solid](assets/icones/lamp-solid.png) lamp-solid
- ![lavanderia](assets/icones/lavanderia.png) lavanderia
- ![lazer-recreation-outline](assets/icones/lazer-recreation-outline.png) lazer-recreation-outline
- ![lazer-recreation-solid](assets/icones/lazer-recreation-solid.png) lazer-recreation-solid
- ![left-previous](assets/icones/left-previous.png) left-previous
- ![like-ok-outline](assets/icones/like-ok-outline.png) like-ok-outline
- ![like-ok-solid](assets/icones/like-ok-solid.png) like-ok-solid
- ![limit](assets/icones/limit.png) limit
- ![list-items-outline](assets/icones/list-items-outline.png) list-items-outline
- ![list-items-solid](assets/icones/list-items-solid.png) list-items-solid
- ![loan-consignado](assets/icones/loan-consignado.png) loan-consignado
- ![location-outline](assets/icones/location-outline.png) location-outline
- ![location-solid](assets/icones/location-solid.png) location-solid
- ![logo-autentic](assets/icones/logo-autentic.png) logo-autentic
- ![map-outline](assets/icones/map-outline.png) map-outline
- ![map-solid](assets/icones/map-solid.png) map-solid
- ![market-bag-outline](assets/icones/market-bag-outline.png) market-bag-outline
- ![market-bag-solid](assets/icones/market-bag-solid.png) market-bag-solid
- ![menu-plus-collapse](assets/icones/menu-plus-collapse.png) menu-plus-collapse
- ![menu-plus-expand](assets/icones/menu-plus-expand.png) menu-plus-expand
- ![mini-games](assets/icones/mini-games.png) mini-games
- ![mirror-beuty-outline](assets/icones/mirror-beuty-outline.png) mirror-beuty-outline
- ![mirror-beuty-solid](assets/icones/mirror-beuty-solid.png) mirror-beuty-solid
- ![mobile-chip](assets/icones/mobile-chip.png) mobile-chip
- ![mobile-outline](assets/icones/mobile-outline.png) mobile-outline
- ![mobile-solid](assets/icones/mobile-solid.png) mobile-solid
- ![mobile-plan](assets/icones/mobile-plan.png) mobile-plan
- ![money-balance](assets/icones/money-balance.png) money-balance
- ![money-card-outline](assets/icones/money-card-outline.png) money-card-outline
- ![money-card-solid](assets/icones/money-card-solid.png) money-card-solid
- ![money-outline](assets/icones/money-outline.png) money-outline
- ![money-solid](assets/icones/money-solid.png) money-solid
- ![montador-outline](assets/icones/montador-outline.png) montador-outline
- ![montador-solid](assets/icones/montador-solid.png) montador-solid
- ![movimentar-extrato-statement](assets/icones/movimentar-extrato-statement.png) movimentar-extrato-statement
- ![multiply](assets/icones/multiply.png) multiply
- ![natal](assets/icones/natal.png) natal
- ![new-card-segunda-via](assets/icones/new-card-segunda-via.png) new-card-segunda-via
- ![newness-outline](assets/icones/newness-outline.png) newness-outline
- ![newness-solid](assets/icones/newness-solid.png) newness-solid
- ![padlock-lock-outline](assets/icones/padlock-lock-outline.png) padlock-lock-outline
- ![padlock-lock-solid](assets/icones/padlock-lock-solid.png) padlock-lock-solid
- ![padlock-open-outline](assets/icones/padlock-open-outline.png) padlock-open-outline
- ![padlock-open-solid](assets/icones/padlock-open-solid.png) padlock-open-solid
- ![parking-outline](assets/icones/parking-outline.png) parking-outline
- ![parking-solid](assets/icones/parking-solid.png) parking-solid
- ![pet-m-outline](assets/icones/pet-m-outline.png) pet-m-outline
- ![pet-m-solid](assets/icones/pet-m-solid.png) pet-m-solid
- ![pet-p-outline](assets/icones/pet-p-outline.png) pet-p-outline
- ![pet-p-solid](assets/icones/pet-p-solid.png) pet-p-solid
- ![pet-xl-outline](assets/icones/pet-xl-outline.png) pet-xl-outline
- ![pet-xl-solid](assets/icones/pet-xl-solid.png) pet-xl-solid
- ![pets-outline](assets/icones/pets-outline.png) pets-outline
- ![pets-solid](assets/icones/pets-solid.png) pets-solid
- ![phishing](assets/icones/phishing.png) phishing
- ![phone-outline](assets/icones/phone-outline.png) phone-outline
- ![phone-solid](assets/icones/phone-solid.png) phone-solid
- ![pix](assets/icones/pix.png) pix
- ![pixkey](assets/icones/pixkey.png) pixkey
- ![play](assets/icones/play.png) play
- ![plumber-outline](assets/icones/plumber-outline.png) plumber-outline
- ![plumber-solid](assets/icones/plumber-solid.png) plumber-solid
- ![poup-pig](assets/icones/poup-pig.png) poup-pig
- ![pricing-outline](assets/icones/pricing-outline.png) pricing-outline
- ![pricing-solid](assets/icones/pricing-solid.png) pricing-solid
- ![profile-outline](assets/icones/profile-outline.png) profile-outline
- ![profile-solid](assets/icones/profile-solid.png) profile-solid
- ![qrcode](assets/icones/qrcode.png) qrcode
- ![randomkey](assets/icones/randomkey.png) randomkey
- ![receipt-outline](assets/icones/receipt-outline.png) receipt-outline
- ![receipt-solid](assets/icones/receipt-solid.png) receipt-solid
- ![recieve](assets/icones/recieve.png) recieve
- ![restaurant-outline](assets/icones/restaurant-outline.png) restaurant-outline
- ![restaurant-solid](assets/icones/restaurant-solid.png) restaurant-solid
- ![right-next](assets/icones/right-next.png) right-next
- ![scissor-cut-outline](assets/icones/scissor-cut-outline.png) scissor-cut-outline
- ![scissor-cut-solid](assets/icones/scissor-cut-solid.png) scissor-cut-solid
- ![search](assets/icones/search.png) search
- ![selfie-outline](assets/icones/selfie-outline.png) selfie-outline
- ![selfie-solid](assets/icones/selfie-solid.png) selfie-solid
- ![send-money](assets/icones/send-money.png) send-money
- ![send-outline](assets/icones/send-outline.png) send-outline
- ![send-solid](assets/icones/send-solid.png) send-solid
- ![serralheiro-outline](assets/icones/serralheiro-outline.png) serralheiro-outline
- ![serralheiro-solid](assets/icones/serralheiro-solid.png) serralheiro-solid
- ![services-outline](assets/icones/services-outline.png) services-outline
- ![services-solid](assets/icones/services-solid.png) services-solid
- ![share-outline](assets/icones/share-outline.png) share-outline
- ![share-solid](assets/icones/share-solid.png) share-solid
- ![spotify](assets/icones/spotify.png) spotify
- ![store-outline](assets/icones/store-outline.png) store-outline
- ![store-solid](assets/icones/store-solid.png) store-solid
- ![subtract](assets/icones/subtract.png) subtract
- ![sum](assets/icones/sum.png) sum
- ![taxes](assets/icones/taxes.png) taxes
- ![taxes-money](assets/icones/taxes-money.png) taxes-money
- ![teams-outline](assets/icones/teams-outline.png) teams-outline
- ![teams-solid](assets/icones/teams-solid.png) teams-solid
- ![tech-outline](assets/icones/tech-outline.png) tech-outline
- ![tech-solid](assets/icones/tech-solid.png) tech-solid
- ![tecnico-Informatica-outline](assets/icones/tecnico-Informatica-outline.png) tecnico-Informatica-outline
- ![tecnico-Informatica-solid](assets/icones/tecnico-Informatica-solid.png) tecnico-Informatica-solid
- ![telemedicin](assets/icones/telemedicin.png) telemedicin
- ![teste-covid](assets/icones/teste-covid.png) teste-covid
- ![thief](assets/icones/thief.png) thief
- ![ticket-outline](assets/icones/ticket-outline.png) ticket-outline
- ![ticket-solid](assets/icones/ticket-solid.png) ticket-solid
- ![tickets-outline](assets/icones/tickets-outline.png) tickets-outline
- ![tickets-solid](assets/icones/tickets-solid.png) tickets-solid
- ![tools-outline](assets/icones/tools-outline.png) tools-outline
- ![tools-solid](assets/icones/tools-solid.png) tools-solid
- ![transactions-outline](assets/icones/transactions-outline.png) transactions-outline
- ![transactions-solid](assets/icones/transactions-solid.png) transactions-solid
- ![transfer-outline](assets/icones/transfer-outline.png) transfer-outline
- ![transfer-solid](assets/icones/transfer-solid.png) transfer-solid
- ![transport-card](assets/icones/transport-card.png) transport-card
- ![transports](assets/icones/transports.png) transports
- ![trash-outline](assets/icones/trash-outline.png) trash-outline
- ![trash-solid](assets/icones/trash-solid.png) trash-solid
- ![trip-plane](assets/icones/trip-plane.png) trip-plane
- ![turn-camera-outline](assets/icones/turn-camera-outline.png) turn-camera-outline
- ![turn-camera-solid](assets/icones/turn-camera-solid.png) turn-camera-solid
- ![uber](assets/icones/uber.png) uber
- ![uber-eats](assets/icones/uber-eats.png) uber-eats
- ![ultragaz](assets/icones/ultragaz.png) ultragaz
- ![up](assets/icones/up.png) up
- ![vakinha](assets/icones/vakinha.png) vakinha
- ![valueqr](assets/icones/valueqr.png) valueqr
- ![vegan](assets/icones/vegan.png) vegan
- ![velocimeter](assets/icones/velocimeter.png) velocimeter
- ![virtual-card-ame-outline](assets/icones/virtual-card-ame-outline.png) virtual-card-ame-outline
- ![virtual-card-ame-solid](assets/icones/virtual-card-ame-solid.png) virtual-card-ame-solid
- ![wallet-outline](assets/icones/wallet-outline.png) wallet-outline
- ![wallet-solid](assets/icones/wallet-solid.png) wallet-solid
- ![wdental](assets/icones/wdental.png) wdental
- ![withdraw-retirar-outline](assets/icones/withdraw-retirar-outline.png) withdraw-retirar-outline
- ![withdraw-retirar-solid](assets/icones/withdraw-retirar-solid.png) withdraw-retirar-solid
- ![work-outline](assets/icones/work-outline.png) work-outline
- ![work-solid](assets/icones/work-solid.png) work-solid
