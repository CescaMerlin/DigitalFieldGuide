const schema = `
    
    """
    @model
    """

    type Bird {
        id: ID!
        commonNameEnglish: String
        commonNameJapanese: String
        commonNameRomaji: String
        order: String!
        family: String!
        species: String
        range: String
        photos: [String]
        profilePic: String
    }

`;

module.exports = schema;
