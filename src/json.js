export default {
    attr: {
        data: (name) => attr(name, 'data'),
        timestamp: (name) => attr(name, 'timestamp')
    },
    model: {
        contract: (name, desc, ...attributes) => model(name, desc, 'contract', reduce(attributes)),
        contractDetails: (name, desc, ...attributes) => model(name, desc || '', 'contract-details', reduce(attributes)),
        fulfillmentRequest: (name, desc, attributes) => model(name, desc, 'fulfillment', attributes),
        fulfillmentConfirmation: (name, attributes) => model(name, '', 'fulfillment', attributes)
    },
    rel: {
        details: (source, target) => relationship(source.id, target.id, 'details'),
        fulfillment: (source, target) => relationship(source.id, target.id, 'fulfillment'),
        confirmation: (source, target) => relationship(source.id, target.id, 'confirmation'),
    }
};

function relationship(source, target, type) {
    return {source: source, target: target, type: type};
}

function reduce(attributes) {
    return attributes.length === 0 ? [] : attributes.reduce((acc, cur) => acc.concat(cur));
}

function model(name, desc, archetype, attributes) {
    return {
        id: name,
        desc: desc,
        archetype: archetype,
        attributes: attributes
    }
}

function attr(name, type) {
    return {name: name, type: type};
}