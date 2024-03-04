const SearchedItemTemplate = ({ data }) => {
    function createMarkup(html) {
        return { __html: html };
    }

    return (
        <div className="flex flex-col py-3 max-w-[700px]">
            <div
                className="group cursor-pointer"
                onClick={() => window.open(data.link, "_blank")}
            >
                <div className="text-sm truncate text-[#ffffff]">
                    {data.formattedUrl}
                </div>
                <div className="group-hover:underline text-xl text-[#000000] pt-2">
                    {data.title}
                </div>
            </div>
            <div
                className="text-sm text-[#ffffff] leading-6 pt-1"
                dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
            />
        </div>
    );
};

export default SearchedItemTemplate;
