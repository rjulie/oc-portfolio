function Tags({ tags }) {

  return (
    <div>
      {tags ? (
        <div className="flex flex-row flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div className={`tag border border-gray-500 rounded px-1.5 py-0.5 text-sm text-gray-500`} key={index}>
              {tag}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}


export default Tags
