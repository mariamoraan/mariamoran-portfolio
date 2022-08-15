import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

function renderOptions(links) {
    // create an asset block map
    const assetBlockMap = new Map();
    // loop through the assets and add them to the map
    for (const asset of links.assets.block) {
      assetBlockMap.set(asset.sys.id, asset);
    }
  
    // create an entry block map
    const entryBlockMap = new Map();
    // loop through the assets and add them to the map
    for (const entry of links.entries.block) {
      entryBlockMap.set(entry.sys.id, entry);
    }
  
    return {
      // other options...
  
      renderNode: {
        // other options...
  
        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
          // find the entry in the entryBlockMap by ID
          const entry = entryBlockMap.get(node.data.target.sys.id);
  
          // render the entries as needed by looking at the __typename 
          // referenced in the GraphQL query
          if (entry.__typename === "CodeBlock") {
            return (
              <pre>
                <code>{entry.code}</code>
              </pre>
            );
          }
  
         if (entry.__typename === "VideoEmbed") {
           return (
              <iframe
                src={entry.embedUrl}
                height="100%"
                width="100%"
                frameBorder="0"
                scrolling="no"
                title={entry.title}
                allowFullScreen={true}
              />
            );
          }
  
        },
        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
          // find the asset in the assetBlockMap by ID
          const asset = assetBlockMap.get(node.data.target.sys.id);
  
          // render the asset accordingly
          return (
            <img src={asset.url} alt="My image alt text" />
          );
        },
      },
    };
}

const RichText = ({json, links, className}) => {
    return <div className={className}>{documentToReactComponents(json)}</div>;
}

export default RichText;