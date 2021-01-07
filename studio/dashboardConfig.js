export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff7469392388a3d24c089c3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-icqstnk2',
                  apiId: '6d63165a-0859-4473-b8aa-df534072fb04'
                },
                {
                  buildHookId: '5ff74693c45579578d7c9def',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a3y97z3s',
                  apiId: '6bcd773d-2056-4bbf-8bdb-4ef085630b27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fsteve218/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a3y97z3s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
