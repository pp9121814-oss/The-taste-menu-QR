function searchFood() {
    const query = document
        .getElementById("search")
        .value
        .toLowerCase()
        .trim();

    // Search karte waqt category filter hata do
    activeCategory = "All";

    const results = [];

    menu.forEach(section => {

        section.items.forEach(item => {

            const name = item[0].toLowerCase();
            const category = section.cat.toLowerCase();

            // Item name OR category me keyword match
            if (
                name.includes(query) ||
                category.includes(query)
            ) {
                results.push({
                    name: item[0],
                    price: item[1],
                    image: images[item[2]],
                    category: section.cat,
                    id: item[2]
                });
            }

        });

    });

    displaySearchResults(results);
}
