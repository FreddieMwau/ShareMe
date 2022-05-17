export default {
    name:'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'about',
            title: 'About',
            type: 'string',
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'url',
        }, 
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                // hotspot enables the user interface to select what areas of the image should be cropped out or what areas should never be cropped
                hotspot: true
            }
        },
        {
            name: 'userID',
            title: 'UserID',
            type: 'string',
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [
                {
                    type: 'save'
                }
            ]
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [
                {
                    type: 'comment'
                }
            ]
        },
        
    ]
}