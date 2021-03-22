const schema = `
    
    """
    @model
    """

    type Bird {
        id: ID
        commonName: String
        species: String!
        range: String
        photos: [String]
        profilePic: String
    }

    """
    @model
    """

    type Order {
        id: ID
        orderName: String
        """
        @oneToMany(field: 'sciOrder')
        """
        birds: [Bird]
    }

    type Family {
        id: ID
        familyName: String
        """
        @oneToMany(field: 'sciFamily')
        """
        birds: [Bird]
    }

`;

module.exports = schema;
