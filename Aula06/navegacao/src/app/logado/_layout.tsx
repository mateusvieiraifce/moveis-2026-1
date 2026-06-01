import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home' : 'home-outline'} size={28} color={color} />
                ),
            }} >

            </Tabs.Screen>

            <Tabs.Screen name="user" options={{
                title: 'Usuários',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'book' : 'book-outline'} size={28} color={color} />
                ),
            }} >

            </Tabs.Screen>


           <Tabs.Screen name="produto/[id]/index" options={{
                title: 'Produtos',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'logo-amazon' : 'logo-amazon'} size={28} color={color} />
                ),
            }} >

            </Tabs.Screen>
            <Tabs.Screen name="produto/[id]/update" options={{
                href: null,
                title: 'ProdutosUpdate',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'logo-amazon' : 'logo-amazon'} size={28} color={color} />
                ),
            }} ></Tabs.Screen>

            <Tabs.Screen name="produto/[id]/new" options={{
                href: null,
                title: 'Novo Produto',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'logo-amazon' : 'logo-amazon'} size={28} color={color} />
                ),
            }} ></Tabs.Screen>

             <Tabs.Screen name="fornecedor" options={{
                title: 'Fonecedor',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'airplane' : 'airplane-outline'} size={28} color={color} />
                ),
            }} >

            </Tabs.Screen>
        </Tabs>


    )
}

