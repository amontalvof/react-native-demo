import { Image, ScrollView, Text, View } from 'react-native';
import logoImg from '../assets/adaptive-icon.png';

const ScrollViewExample = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
            <ScrollView>
                <Image source={logoImg} style={{ width: 300, height: 300 }} />
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore fuga cumque iste animi aliquid tenetur nobis!
                    Blanditiis, repudiandae. Reprehenderit suscipit, asperiores
                    nesciunt nulla qui perspiciatis possimus dolore vel fuga,
                    similique ratione voluptas voluptatibus doloribus ea
                    obcaecati sed laborum recusandae officiis! Eius voluptatibus
                    ratione ipsam amet optio, cumque a necessitatibus nesciunt.
                    Quia sunt magni perferendis, expedita eius accusamus,
                    accusantium odit temporibus vero repellendus nihil libero
                    quis excepturi corrupti nisi quibusdam qui reprehenderit.
                    Aliquam minus nobis minima consectetur, iusto odio
                    perspiciatis eligendi odit placeat nemo sapiente, quam
                    ipsum, soluta itaque. Quaerat culpa ut itaque beatae. Nulla,
                    eveniet, iste commodi sed laborum quod doloremque alias
                    asperiores deserunt fuga sit nemo eius ipsa itaque, porro
                    ipsum laudantium voluptatibus consectetur facilis voluptate
                    unde. Optio eum impedit quam ad rerum consequuntur natus
                    porro sunt obcaecati repellat ab placeat enim magnam
                    perferendis recusandae eius rem et nostrum, minima ipsum.
                    Velit perferendis a exercitationem consequuntur nobis
                    quaerat, perspiciatis et voluptatibus incidunt molestias
                    debitis deleniti id reiciendis omnis! Animi minima
                    voluptates, necessitatibus iusto vitae cupiditate
                    consequatur officiis nobis voluptatem blanditiis earum
                    similique voluptate dolorem, natus harum dolor tempore a
                    dolores consequuntur debitis dolore! Voluptatem ipsam
                    debitis eveniet repudiandae neque architecto vitae, eius
                    saepe commodi, quas rem maiores, maxime magnam?
                </Text>
                <Image source={logoImg} style={{ width: 300, height: 300 }} />
            </ScrollView>
        </View>
    );
};

export default ScrollViewExample;
