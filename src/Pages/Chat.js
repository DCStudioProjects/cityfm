import { DiscussionEmbed } from "disqus-react"

const Chat = () => {
  const disqusShortname = "your-disqus-shortname"
  const disqusConfig = {
    url: "https://cityfm.gq/chat",
    identifier: "city-fm", // Single post id
    title: "Чат" // Single post title
  }
  return (
    <div>
      <h1>Чат</h1>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default Chat;