import strawberry
from strawberry_django.optimizer import DjangoOptimizerExtension
from strawberry.tools import merge_types
import muzyczny.accounts.schema
import muzyczny.products.schema
import muzyczny.orders.schema

RootQuery = merge_types("Query", (
    muzyczny.accounts.schema.Query,
    muzyczny.products.schema.Query,
    muzyczny.orders.schema.Query
    ))

RootMutation = merge_types("Mutation", (
    muzyczny.accounts.schema.Mutation,
    muzyczny.orders.schema.Mutation
    ))

schema = strawberry.Schema(
    RootQuery,
    RootMutation,
    extensions=[
        DjangoOptimizerExtension,  # not required, but highly recommended
    ],
)
