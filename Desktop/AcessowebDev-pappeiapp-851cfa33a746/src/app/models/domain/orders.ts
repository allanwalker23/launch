
export interface Orders{
    
    id:number;
data_pedido:string

    
    numero_pedido:string

    
    nf_cpj:string

    
    cliente_id:string

    
    tipo_pagamento:string

    
    valor:string
    subtotal:string
    empresa_id:string;
    troco_valor:string;
    status:string;
    opcao_pagamento_id:string;
    valor_pappei:string;
    valor_final:string
    cash_back:string;
    cash_back_id:string;
    valor_cashback_utilizado:string;
    cliente_endereco_id:string;
    avaliado:string;

    

    data_aceite:number;

        data_limite_aceite:string;

        data_pronto:number

    
    data_saiu_entrega:string;
    data_entregue:string;
    hora_agendada:string;
    valor_franqueado:string;
    email_avaliacao:string
    franqueado_id:string;
   
}