import HeadMeta from '@/pages/src/HeadMeta'
import Layout from '@/pages/src/Layout'
import List from '@/pages/src/List'

export default function Home() {

  return (
    <>
      <Layout>
        <HeadMeta title="index" />
        <List />    
      </Layout>
    </>
  )
}

