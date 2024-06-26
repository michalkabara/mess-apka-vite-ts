/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/League": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @deprecated */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["League"][];
                        "application/json": components["schemas"]["League"][];
                        "text/json": components["schemas"]["League"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/League/new": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["LeagueResult"][];
                        "application/json": components["schemas"]["LeagueResult"][];
                        "text/json": components["schemas"]["LeagueResult"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/League/{id}/new": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["League"];
                        "application/json": components["schemas"]["League"];
                        "text/json": components["schemas"]["League"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/League/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["League"];
                        "application/json": components["schemas"]["League"];
                        "text/json": components["schemas"]["League"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/League/{leagueId}/table": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    leagueId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["LeagueTableResult"][];
                        "application/json": components["schemas"]["LeagueTableResult"][];
                        "text/json": components["schemas"]["LeagueTableResult"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Match/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["MatchResultDto"];
                        "application/json": components["schemas"]["MatchResultDto"];
                        "text/json": components["schemas"]["MatchResultDto"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Match/team/{teamId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    page?: number;
                    pageSize?: number;
                };
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["MatchResultDtoPagedResponse"];
                        "application/json": components["schemas"]["MatchResultDtoPagedResponse"];
                        "text/json": components["schemas"]["MatchResultDtoPagedResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Match/league/{leagueId}/matches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @deprecated */
        get: {
            parameters: {
                query?: {
                    page?: number;
                    pageSize?: number;
                };
                header?: never;
                path: {
                    leagueId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["MatchResultDtoPagedResponse"];
                        "application/json": components["schemas"]["MatchResultDtoPagedResponse"];
                        "text/json": components["schemas"]["MatchResultDtoPagedResponse"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Match/league/{leagueId}/round-count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    leagueId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Match/{leagueId}/matches/{round}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    leagueId: string;
                    round: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["MatchResultDto"][];
                        "application/json": components["schemas"]["MatchResultDto"][];
                        "text/json": components["schemas"]["MatchResultDto"][];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Player/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Player"];
                        "application/json": components["schemas"]["Player"];
                        "text/json": components["schemas"]["Player"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Teams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Team"][];
                        "application/json": components["schemas"]["Team"][];
                        "text/json": components["schemas"]["Team"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Teams/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Team"];
                        "application/json": components["schemas"]["Team"];
                        "text/json": components["schemas"]["Team"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Teams/league/{leagueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    leagueId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Team"][];
                        "application/json": components["schemas"]["Team"][];
                        "text/json": components["schemas"]["Team"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Teams/{id}/players": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Player"];
                        "application/json": components["schemas"]["Player"];
                        "text/json": components["schemas"]["Player"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Format: int32
         * @enum {integer}
         */
        EventType: "0 - Unknown" | "1 - YellowCard" | "2 - RedCard" | "3 - SubOut" | "4 - SubIn" | "5 - Injury" | "6 - Goal" | "7 - OwnGoal" | "8 - Penalty";
        League: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            lnpId?: string;
            /** Format: uuid */
            parentLeagueId?: string | null;
            name?: string | null;
            logoUrl?: string | null;
            season?: string | null;
            /** Format: int32 */
            order?: number | null;
            teams?: components["schemas"]["Team"][] | null;
            matchResults?: components["schemas"]["MatchResult"][] | null;
            parentLeague?: components["schemas"]["League"];
            lnpLinks?: components["schemas"]["LnpLink"][] | null;
        };
        LeagueResult: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            parentLeagueId?: string | null;
            name?: string | null;
            logoUrl?: string | null;
            season?: string | null;
            childLeagues?: components["schemas"]["LeagueResult"][] | null;
        };
        LeagueTableResult: {
            teamId?: string | null;
            teamName?: string | null;
            logoUrl?: string | null;
            /** Format: int32 */
            played?: number;
            /** Format: int32 */
            won?: number;
            /** Format: int32 */
            drawn?: number;
            /** Format: int32 */
            lost?: number;
            /** Format: int32 */
            goalsFor?: number;
            /** Format: int32 */
            goalsAgainst?: number;
            /** Format: int32 */
            goalDifference?: number;
            /** Format: int32 */
            points?: number;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        LegPreference: "0 - Unknown" | "1 - Left" | "2 - Right" | "3 - Both";
        LnpLink: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            leagueId?: string;
            link?: string | null;
            isCurrent?: boolean;
            league?: components["schemas"]["League"];
        };
        MatchEvent: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            lnpId?: string;
            /** Format: uuid */
            playerId?: string;
            /** Format: uuid */
            matchResultId?: string;
            /** Format: int32 */
            minute?: number;
            /** Format: int32 */
            additionalTime?: number | null;
            isHostEvent?: boolean;
            eventType?: components["schemas"]["EventType"];
            player?: components["schemas"]["Player"];
            matchResult?: components["schemas"]["MatchResult"];
        };
        MatchEventDto: {
            /** Format: int32 */
            minute?: number;
            /** Format: int32 */
            additionalTime?: number | null;
            isHostEvent?: boolean;
            eventType?: components["schemas"]["EventType"];
            playerName?: string | null;
            readonly displayTime?: string | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        MatchOutcome: "0 - Undefined" | "1 - HomeWin" | "2 - AwayWin" | "3 - Draw";
        MatchResult: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            lnpId?: string;
            /** Format: uuid */
            homeTeamId?: string | null;
            /** Format: uuid */
            awayTeamId?: string | null;
            /** Format: uuid */
            leagueId?: string | null;
            /** Format: int32 */
            homeGoals?: number | null;
            /** Format: int32 */
            awayGoals?: number | null;
            /** Format: date-time */
            date?: string;
            /** Format: int32 */
            round?: number;
            /** Format: int32 */
            additionalTimeFirstHalf?: number;
            /** Format: int32 */
            additionalTimeSecondHalf?: number;
            mainRefereeName?: string | null;
            assistantRefereeName?: string | null;
            secondAssistantRefereeName?: string | null;
            observerName?: string | null;
            trybunaTvWatchLink?: string | null;
            stadiumName?: string | null;
            players?: components["schemas"]["Player"][] | null;
            events?: components["schemas"]["MatchEvent"][] | null;
            /** Format: uuid */
            readonly winnerId?: string | null;
            readonly isFinished?: boolean;
            outcome?: components["schemas"]["MatchOutcome"];
            awayTeam?: components["schemas"]["Team"];
            homeTeam?: components["schemas"]["Team"];
        };
        MatchResultDto: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            homeTeamId?: string | null;
            /** Format: uuid */
            awayTeamId?: string | null;
            /** Format: uuid */
            leagueId?: string | null;
            /** Format: int32 */
            homeGoals?: number | null;
            /** Format: int32 */
            awayGoals?: number | null;
            /** Format: date-time */
            date?: string;
            /** Format: int32 */
            round?: number;
            events?: components["schemas"]["MatchEventDto"][] | null;
            /** Format: uuid */
            readonly winnerId?: string | null;
            readonly isFinished?: boolean;
            outcome?: components["schemas"]["MatchOutcome"];
            awayTeam?: components["schemas"]["Team"];
            homeTeam?: components["schemas"]["Team"];
            homePlayers?: components["schemas"]["Player"][] | null;
            awayPlayers?: components["schemas"]["Player"][] | null;
        };
        MatchResultDtoPagedResponse: {
            data?: components["schemas"]["MatchResultDto"][] | null;
            /** Format: int32 */
            pageIndex?: number;
            /** Format: int32 */
            pageSize?: number;
            /** Format: int32 */
            pageCount?: number;
            /** Format: int32 */
            totalCount?: number;
        };
        Player: {
            /** Format: uuid */
            id?: string;
            name?: string | null;
            photoUrl?: string | null;
            /** Format: int32 */
            number?: number | null;
            /** Format: int32 */
            goals?: number;
            /** Format: int32 */
            assists?: number;
            /** Format: int32 */
            yellowCards?: number;
            /** Format: int32 */
            redCards?: number;
            roles?: components["schemas"]["PlayerRole"];
            legPreference?: components["schemas"]["LegPreference"];
            readonly lastName?: string | null;
            readonly firstName?: string | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        PlayerRole: "1 - Unknown" | "2 - Goalkeeper" | "4 - Defender" | "8 - Midfielder" | "16 - Attacker" | "32 - Striker" | "64 - Captain";
        ProblemDetails: {
            type?: string | null;
            title?: string | null;
            /** Format: int32 */
            status?: number | null;
            detail?: string | null;
            instance?: string | null;
            [key: string]: unknown;
        };
        Team: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            lnpId?: string;
            name?: string | null;
            lnpName?: string | null;
            logoUrl?: string | null;
            colors?: string | null;
            facebookUrl?: string | null;
            twitterUrl?: string | null;
            instagramUrl?: string | null;
            websiteUrl?: string | null;
            youtubeUrl?: string | null;
            /** Format: uuid */
            readonly currentLeague?: string | null;
            readonly leagueHistory?: {
                [key: string]: (string | null) | undefined;
            } | null;
            players?: components["schemas"]["Player"][] | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
