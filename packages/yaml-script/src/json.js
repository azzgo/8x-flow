export default {
    attr: {
        data: (name) => attr(name, 'data'),
        timestamp: (name) => attr(name, 'timestamp')
    }
};

export function jsonContext(context) {
    function entity(archetype) {
        return function (name, desc, attributes) {
            return context.model({
                id: name,
                desc: desc || "",
                archetype: archetype,
                attributes: attributes || []
            });
        }
    }

    function relationship(type) {
        return function (source, target) {
            context.rel({source: source.id, target: target.id, type: type});
        }
    }

    return {
        model: {
            rfp: entity('rfp'),
            proposal: entity('proposal'),
            contract: entity('contract'),
            evidence: entity('evidence'),
            agreement: entity('agreement'),

            party: entity('party'),
            place: entity('place'),
            thing: entity('thing'),

            role: (name, desc) => entity('role')(name, desc || '', []),
            domain: (name, desc) => entity('domain')(name, desc || '', []),
            system: (name, desc) => entity('system')(name, desc || '', []),

            details: entity('details'),
            fulfillmentRequest: entity('fulfillment'),
            fulfillmentConfirmation: (name, variform, attributes) =>
                entity(variform ? 'variform' : 'fulfillment')(name, '', attributes),
            participant: (name) => entity('participant')(name, '', [])
        },
        rel: {
            details: relationship('has-details'),
            fulfillment: relationship('fulfillment'),
            confirmation: relationship('confirmation'),
            participant: relationship('participant'),
            plays: relationship('plays'),
            relates: relationship('relates'),
            evidence: relationship('as-evidence')
        },
        result: context.result
    }
}

function attr(name, type) {
    return {name: name, type: type};
}