import React from "react";

export const DescriptionText = ({ isObser }) => {
    return (
        <div
            className={
                isObser
                    ? "description__text description__text_desOf"
                    : "description__text description__text_desOn"
            }
        >
            {" "}
            Irrespective of the centuries gone by and the decades to come,
            building a home always proves to be an exclusive and personal
            experience. For eminent designers like Suraj Mittal, Founder and
            Principal Architect of Future Concepts, residential projects come
            with the responsibility of curating designs that are more reflective
            of the owners than the designers’ niche. Nestled in the affluent
            neighbourhood of Janakpuri, Delhi, this contemporary urban residence
            features modish design details that constantly outshine each other
            as they settle into a plush definition of exalted luxury. It boasts
            a magnificent curation of evergreen elements interpreting an
            eclectic theme of tastes and stipulations in different parts of the
            house. Adhering to the client’s mandate, ‘Radiance Residence’ is
            arranged like a quaint Jazz symphony unfolding amidst discrete
            design rhythms and settles within regal prominence. The entire house
            follows an eclectic theme to accommodate their prismatic taste and
            requirements, but never swerves from belonging in the same space.
            Ar. Suraj Mittal achieves the all-embracing design theme of the
            house by commissioning the colour palette as his second-in-command.
            A stroll around the house reveals a concoction of warm, vibrant,
            rich and deep tones imbued in different parts of the house, for
            instance, the dining space is incandescently warm whereas the second
            floor announces itself with its pristine white definitions.
            <p>
                A superfluous classification of the house divides it into seven
                major spaces which include the bedrooms, the living room, the
                dining area, the practice kitchen with a washing space in it,
                the bar lounge and the patio. Every space is delegated a focal
                theme which essentially dictates all the design elements
                stationed there. As one makes their way around the living and
                dining area, the comprehensive transition of the design
                narration in the house knocks into their vision. The spaces are
                positioned adjacent to each other with only an artful tinted
                glass partition separating them; however, the drastic
                progression from the living room’s stately chic palette to the
                dining’s fetching warmth is unmissable. While both the spaces
                feature plush Warwick suede fabric adorning the seating
                furniture, the difference in shades of the couches’ rich violet
                and grey and the dining chair’s pristine white put them apart.
            </p>
            <p>
                The accent walls in both spaces starkly contrast with the sleek
                white wainscoting panels in the living room, departing from the
                textured marble cladding in the dining area. The biggest
                giveaway of the distinction in the palette is highlighted by the
                lighting installations chosen for the spaces wherein the living
                room is fitted with soft white ceiling lights, aided by the
                natural light courtesy of the balcony window, and on the other
                hand, artistic decor lighting hanging above the double-height
                dining area and the subdued wall, lighting flushes it in a warm
                ambience. On similar lines, every other design detail, like the
                flooring marble, the décor curtains, etc., is distinctly suited
                to the spaces.
            </p>
        </div>
    );
};
