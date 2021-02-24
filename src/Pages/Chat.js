import { DiscussionEmbed } from "disqus-react"
import { Comments } from "react-vk";
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
      <Comments elementId={'chat'} options={'chat'} pageId={'guest'} />
    </div>
  )
}
export default Chat;