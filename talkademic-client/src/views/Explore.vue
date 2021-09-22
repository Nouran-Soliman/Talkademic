<template>
    <v-container max-width="80%">
        <v-row align="center" no-gutters >
            <v-col cols="5" sm="5" md="5">
            <h1> Trending Discussions in </h1>
            </v-col>
            <v-col cols="5" sm="5" md="5">
            <v-select v-model="value" :items="items" label="Select Field" multiple>
                <template v-slot:selection="{ item, index }">
                    <v-chip color="primary" text-color="secondary" v-if="index === 0">
                    <span>{{ item }}</span>
                    </v-chip>
                    <v-chip color="primary" text-color="secondary" v-if="index === 1">
                    <span>{{ item }}</span>
                    </v-chip>
                    <span text-color="secondary" v-if="index === 2" class="grey--text caption"> (+{{ value.length - 2 }} others) </span>
                </template>
            </v-select>
            </v-col>
            <v-col cols="2" sm="2" md="2">
                <h1>Field(s)</h1>
            </v-col>
        </v-row>
        <conversation-card/>
        <paper-card/>
    </v-container>
</template>

<script>

    import PaperCard from '../components/layout/PaperCard.vue'
    import ConversationCard from '../components/layout/ConversationCard.vue'
    export default {
        components: { PaperCard, ConversationCard},
        data(){
            return{
                items: ['All', 'Machine Learning', 'HCI', 'CSCW'],
                value: ['All'],
            }
        }

    }
</script>

<style scoped>

</style>